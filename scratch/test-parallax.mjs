import { spawn } from 'node:child_process';

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Start Next.js start server temporarily
const serverProc = spawn('npm', ['run', 'start', '--', '-p', '3001'], { stdio: 'ignore' });

async function waitServer() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch('http://localhost:3001');
      if (res.ok) return;
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error("Server failed to start on 3001");
}

async function testParallax() {
  await waitServer();
  const chromeProc = spawn(CHROME_PATH, [
    '--remote-debugging-port=9223',
    '--headless=new',
    '--disable-gpu',
    'about:blank'
  ], { stdio: 'ignore' });

  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9223/json/version');
      if (res.ok) break;
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }

  const listRes = await fetch('http://127.0.0.1:9223/json/list');
  const pages = await listRes.json();
  const page = pages.find(p => p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const callbacks = new Map();
  ws.onmessage = e => {
    const d = JSON.parse(e.data);
    if (d.id && callbacks.has(d.id)) {
      callbacks.get(d.id)(d.result);
      callbacks.delete(d.id);
    }
  };
  const send = (method, params = {}) => new Promise(res => {
    const curId = id++;
    callbacks.set(curId, res);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:3001' });
  await new Promise(r => setTimeout(r, 2000));

  // Get position of the story quote section
  const secInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('[aria-label="Story and Healing Quote"]');
      const r = sec.getBoundingClientRect();
      return { y: window.scrollY + r.top, height: r.height };
    })()`,
    returnByValue: true
  });
  const { y, height } = secInfo.result.value;
  console.log('Section top Y:', y, 'height:', height);

  // Scroll to different positions and verify parallax transform
  const scrolls = [y - 400, y, y + 200];
  for (const s of scrolls) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${s});` });
    await new Promise(r => setTimeout(r, 200));

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.querySelector('[aria-label="Story and Healing Quote"]');
        const imgWrapper = sec.querySelector('.will-change-transform');
        return {
          scrollY: window.scrollY,
          transform: imgWrapper ? imgWrapper.style.transform : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Scroll:', s, evalRes.result.value);
  }

  ws.close();
  chromeProc.kill();
  serverProc.kill();
}

testParallax().catch(err => {
  console.error(err);
  process.exit(1);
});

