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
      const newRes = await fetch(`http://127.0.0.1:${PORT}/json/new?http://localhost:3000`, { method: 'PUT' });
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
    await send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 2000));

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
          const sec = document.querySelector('[aria-label="Our Areas of Expertise"]');
          if (!sec) return { error: 'section not found' };
          const secRect = sec.getBoundingClientRect();
          const grid = sec.querySelector('.expertise-fluid-grid');
          const heading = sec.querySelector('.expertise-block-heading');
          const cols = sec.querySelectorAll('.col-start-2');
          
          const secStyle = window.getComputedStyle(sec);
          const gridStyle = grid ? window.getComputedStyle(grid) : null;
          
          // find bottom of last item
          let lastItemBottom = 0;
          sec.querySelectorAll('p').forEach(p => {
            const r = p.getBoundingClientRect();
            if (r.bottom > lastItemBottom) lastItemBottom = r.bottom;
          });
          
          return {
            w: window.innerWidth,
            secHeight: secRect.height,
            secPaddingTop: secStyle.paddingTop,
            secPaddingBottom: secStyle.paddingBottom,
            gridHeight: grid ? grid.getBoundingClientRect().height : null,
            spaceAfterLastText: secRect.bottom - lastItemBottom
          };
        })()`,
        returnByValue: true
      });

      console.log(`Local site measurements at ${w}px:`, res.result.value);
    }

    ws.close();
  } finally {
    chromeProc.kill();
  }
}

run().catch(console.error);

