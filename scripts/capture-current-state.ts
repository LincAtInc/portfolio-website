import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.join(__dirname, "../inc/narrate/current-state");
const SCREENSHOT_DIR = path.join(__dirname, "../public/images/current-state");

const routes = [
  { path: "/", name: "Homepage" },
  { path: "/inc", name: "INC Cycle" },
  { path: "/fit", name: "Right Fit / Wrong Fit" },
  { path: "/work", name: "Work" },
  { path: "/explore", name: "Explore" },
  { path: "/system", name: "The System" },
  { path: "/thoughts", name: "Thoughts" },
  { path: "/headless-ds", name: "Headless DS" },
];

async function capture() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const inventory: { route: string; name: string; screenshot: string; title: string }[] = [];

  for (const route of routes) {
    const url = BASE_URL + route.path;
    console.log(`Capturing ${route.name} (${url})...`);

    await page.goto(url, { waitUntil: "networkidle" });
    const title = await page.title();

    const slug = route.path === "/" ? "homepage" : route.path.replace(/\//g, "-").replace(/^-/, "");
    const screenshotPath = path.join(SCREENSHOT_DIR, `${slug}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    inventory.push({
      route: route.path,
      name: route.name,
      screenshot: `/images/current-state/${slug}.png`,
      title,
    });
  }

  await browser.close();

  // Generate markdown inventory
  const now = new Date().toISOString().split("T")[0];
  const lines = [
    "---",
    "name: Current State Inventory",
    "source: Playwright",
    `captured: ${now}`,
    "type: narrate",
    `total_routes: ${inventory.length}`,
    "---",
    "",
    "# Current State",
    "",
    `Captured ${inventory.length} routes on ${now}.`,
    "",
    "| Route | Page | Title |",
    "|---|---|---|",
    ...inventory.map((r) => `| \`${r.route}\` | ${r.name} | ${r.title} |`),
    "",
    "## Screenshots",
    "",
    ...inventory.map((r) => `### ${r.name}\n\`${r.route}\`\n\n![${r.name}](${r.screenshot})\n`),
  ];

  const mdPath = path.join(OUTPUT_DIR, "inventory.md");
  fs.writeFileSync(mdPath, lines.join("\n"));
  console.log(`\nInventory saved to ${mdPath}`);
  console.log(`Screenshots saved to ${SCREENSHOT_DIR}`);
}

capture().catch(console.error);
