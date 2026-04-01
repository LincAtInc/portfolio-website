import { chromium } from "playwright";

const pages = [
  { name: "home", path: "/" },
  { name: "work", path: "/work" },
  { name: "headless-ds", path: "/headless-ds" },
  { name: "podcast", path: "/podcast" },
  { name: "thoughts", path: "/thoughts" },
  { name: "thoughts--approved-in-theory", path: "/thoughts/approved-in-theory" },
  { name: "thoughts--assistive-tech", path: "/thoughts/assistive-tech" },
  { name: "thoughts--beyond-ui", path: "/thoughts/beyond-ui" },
  { name: "thoughts--competing-values", path: "/thoughts/competing-values" },
  { name: "thoughts--digital-samsara", path: "/thoughts/digital-samsara" },
  { name: "thoughts--dyslexic-advantage", path: "/thoughts/dyslexic-advantage" },
  { name: "thoughts--make-culture", path: "/thoughts/make-culture" },
  { name: "thoughts--product-primitives", path: "/thoughts/product-primitives" },
  { name: "thoughts--room-after-the-talk", path: "/thoughts/room-after-the-talk" },
  { name: "thoughts--scout-bees", path: "/thoughts/scout-bees" },
  { name: "thoughts--stakeholder-simulator", path: "/thoughts/stakeholder-simulator" },
  { name: "thoughts--the-middleware-problem", path: "/thoughts/the-middleware-problem" },
  { name: "system", path: "/system" },
  { name: "system--agents", path: "/system/agents" },
  { name: "system--claude-md", path: "/system/claude-md" },
  { name: "system--how-this-was-built", path: "/system/how-this-was-built" },
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: "dark",
  });

  for (const page of pages) {
    const p = await context.newPage();
    await p.goto(`http://localhost:3000${page.path}`, { waitUntil: "load", timeout: 60000 });
    await p.screenshot({
      path: `screenshots/${page.name}.png`,
      fullPage: true,
    });
    console.log(`✓ ${page.name}`);
    await p.close();
  }

  await browser.close();
  console.log(`\nDone — ${pages.length} screenshots saved to screenshots/`);
}

run();
