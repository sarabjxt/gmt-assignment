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

  // Wait for Chrome to be ready
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) {
        return proc;
      }
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
    await new Promise(r => setTimeout(r, 1500));

    const widths = [320, 375, 414, 640, 768, 820, 1024, 1280, 1440, 1920];
    const results = [];

    for (const w of widths) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: w,
        height: 900,
        deviceScaleFactor: 1,
        mobile: w < 768,
      });
      await new Promise(r => setTimeout(r, 400));

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const docW = document.documentElement.scrollWidth;
          const winW = window.innerWidth;
          const diff = docW - winW;
          
          let offending = [];
          if (diff > 0) {
            const all = document.querySelectorAll('*');
            for (const el of all) {
              const r = el.getBoundingClientRect();
              if (r.right > winW + 1) {
                offending.push({
                  tag: el.tagName,
                  class: el.className?.toString?.().slice(0, 100),
                  right: Math.round(r.right),
                  width: Math.round(r.width)
                });
              }
            }
          }
          return {
            winW,
            docW,
            diff,
            hasOverflow: diff > 1,
            offending: offending.slice(0, 5)
          };
        })()`,
        returnByValue: true
      });

      results.push(evalRes.result.value);
    }

    console.log(JSON.stringify(results, null, 2));

    ws.close();
  } finally {
    chromeProc.kill();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

