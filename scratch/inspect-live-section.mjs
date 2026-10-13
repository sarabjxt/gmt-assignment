import { spawn } from 'node:child_process';

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9222;

async function startChrome() {
  const proc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ], { stdio: 'ignore' });

  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return proc;
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error("Failed to start Chrome");
}

async function run() {
  const chromeProc = await startChrome();
  try {
    const listRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
    const pages = await listRes.json();
    let page = pages.find(p => p.type === 'page');
    if (!page) {
      const newRes = await fetch(`http://127.0.0.1:${PORT}/json/new?https://www.conejovalleycounseling.com/`, { method: 'PUT' });
      page = await newRes.json();
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        const { resolve, reject } = callbacks.get(data.id);
        callbacks.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };

    await new Promise((resolve) => ws.onopen = resolve);
    const send = (method, params = {}) => {
      const curId = id++;
      return new Promise((resolve, reject) => {
        callbacks.set(curId, { resolve, reject });
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    };

    await send('Page.enable');
    await send('Page.navigate', { url: 'https://www.conejovalleycounseling.com/' });
    await new Promise(r => setTimeout(r, 3500));

    for (const w of [1440, 375]) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: w,
        height: 900,
        deviceScaleFactor: 1,
        mobile: w < 768,
      });
      await new Promise(r => setTimeout(r, 600));

      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const sec = document.querySelector('[data-section-id="670423e206da6c036366fd65"]');
          if (!sec) return { error: 'section not found' };
          const secRect = sec.getBoundingClientRect();
          const cw = sec.querySelector('.content-wrapper');
          const fe = sec.querySelector('[data-fluid-engine="true"]');
          const heading = sec.querySelector('h3') || sec.querySelector('h2');
          
          const secStyle = window.getComputedStyle(sec);
          const cwStyle = cw ? window.getComputedStyle(cw) : null;
          const feStyle = fe ? window.getComputedStyle(fe) : null;
          
          // find bottommost element inside sec
          const allEls = sec.querySelectorAll('*');
          let maxBottom = 0;
          let bottomEl = null;
          allEls.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.bottom > maxBottom && r.height > 0) {
              maxBottom = r.bottom;
              bottomEl = el.tagName + '.' + el.className;
            }
          });
          
          return {
            w: window.innerWidth,
            secHeight: secRect.height,
            secPaddingTop: secStyle.paddingTop,
            secPaddingBottom: secStyle.paddingBottom,
            cwPaddingTop: cwStyle ? cwStyle.paddingTop : null,
            cwPaddingBottom: cwStyle ? cwStyle.paddingBottom : null,
            feHeight: fe ? fe.getBoundingClientRect().height : null,
            contentBottomDistanceToSecBottom: secRect.bottom - maxBottom,
            maxBottom,
            secBottom: secRect.bottom,
            bottomEl
          };
        })()`,
        returnByValue: true
      });

      console.log(`Live site measurements at ${w}px:`, res.result.value);
    }

    ws.close();
  } finally {
    chromeProc.kill();
  }
}

run().catch(console.error);

