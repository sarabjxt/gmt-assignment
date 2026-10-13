import { spawn } from 'node:child_process';
import fs from 'node:fs';

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

async function captureSections() {
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

    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await new Promise(r => setTimeout(r, 500));

    // Get section selectors
    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const secs = Array.from(document.querySelectorAll('section, footer'));
        return secs.map((s, idx) => {
          const rect = s.getBoundingClientRect();
          const y = window.scrollY + rect.top;
          return {
            idx,
            tag: s.tagName.toLowerCase(),
            class: s.className.split(' ')[0],
            x: Math.round(rect.left),
            y: Math.round(y),
            w: Math.round(rect.width),
            h: Math.round(rect.height)
          };
        });
      })()`,
      returnByValue: true
    });

    const sections = res.result.value;
    console.log("Sections found:", sections);

    for (const s of sections) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${s.y})`
      });
      await new Promise(r => setTimeout(r, 600));

      const { data } = await send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: s.x,
          y: s.y,
          width: s.w,
          height: Math.min(s.h, 1500),
          scale: 1
        },
        captureBeyondViewport: true
      });
      fs.writeFileSync(`scratch/sec-${s.idx}.png`, Buffer.from(data, 'base64'));
      console.log(`Captured scratch/sec-${s.idx}.png (height: ${s.h})`);
    }

    ws.close();
  } finally {
    chromeProc.kill();
  }
}

captureSections().catch(console.error);
