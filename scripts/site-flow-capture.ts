import { chromium, type Page, type Browser } from "playwright";
import * as fs from "fs";
import * as path from "path";

interface CapturedState {
  url: string;
  name: string;
  type: "page" | "modal" | "menu" | "hover" | "mobile";
  screenshot: string;
  linksTo: string[];
}

const BASE_URL = process.argv[2] || "http://localhost:3000";
const SITE_NAME = process.argv[3] || "lincolnmitchell";
const OUTPUT_DIR = path.join("inc/narrate/site-flows", SITE_NAME);
const SCREENSHOT_DIR = path.join("public/images/site-flows", SITE_NAME);

async function captureAllStates(baseUrl: string): Promise<CapturedState[]> {
  const browser = await chromium.launch();
  const states: CapturedState[] = [];
  const visited = new Set<string>();

  // Phase 1: Discover all internal routes by crawling
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  async function discoverRoutes(url: string, depth = 0): Promise<string[]> {
    if (depth > 3 || visited.has(url)) return [];
    visited.add(url);

    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
    } catch {
      return [];
    }

    const links = await page.evaluate((base: string) => {
      const anchors = document.querySelectorAll("a[href]");
      const urls: string[] = [];
      anchors.forEach((a) => {
        const href = (a as HTMLAnchorElement).href;
        if (href.startsWith(base) && !href.includes("#") && !href.includes("mailto:") && !href.includes("cal.com")) {
          urls.push(href);
        }
      });
      return [...new Set(urls)];
    }, baseUrl);

    for (const link of links) {
      if (!visited.has(link)) {
        await discoverRoutes(link, depth + 1);
      }
    }

    return [...visited];
  }

  console.log("Phase 1: Discovering routes...");
  const routes = await discoverRoutes(baseUrl);
  console.log(`Found ${routes.length} routes`);

  await context.close();

  // Phase 2: Screenshot each route (desktop + mobile)
  console.log("\nPhase 2: Capturing screenshots...");

  for (const route of routes) {
    const routePath = new URL(route).pathname;
    const slug = routePath === "/" ? "homepage" : routePath.replace(/\//g, "-").replace(/^-/, "").replace(/-$/, "");

    // Desktop
    const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const desktopPage = await desktopCtx.newPage();
    try {
      await desktopPage.goto(route, { waitUntil: "networkidle", timeout: 10000 });

      const screenshotPath = path.join(SCREENSHOT_DIR, `${slug}-desktop.png`);
      await desktopPage.screenshot({ path: screenshotPath, fullPage: true });

      // Get outbound links
      const linksTo = await desktopPage.evaluate((base: string) => {
        const anchors = document.querySelectorAll("a[href]");
        const urls: string[] = [];
        anchors.forEach((a) => {
          const href = (a as HTMLAnchorElement).href;
          if (href.startsWith(base)) {
            urls.push(new URL(href).pathname);
          }
        });
        return [...new Set(urls)];
      }, baseUrl);

      states.push({
        url: routePath,
        name: slug,
        type: "page",
        screenshot: `/images/site-flows/${SITE_NAME}/${slug}-desktop.png`,
        linksTo,
      });

      console.log(`  ${routePath} (desktop) - ${linksTo.length} links`);

      // Phase 3: Capture interactions on this page

      // Mobile menu
      const mobileCtx = await browser.newContext({ viewport: { width: 375, height: 812 } });
      const mobilePage = await mobileCtx.newPage();
      await mobilePage.goto(route, { waitUntil: "networkidle", timeout: 10000 });

      const mobileScreenshot = path.join(SCREENSHOT_DIR, `${slug}-mobile.png`);
      await mobilePage.screenshot({ path: mobileScreenshot, fullPage: true });
      states.push({
        url: routePath,
        name: `${slug}-mobile`,
        type: "mobile",
        screenshot: `/images/site-flows/${SITE_NAME}/${slug}-mobile.png`,
        linksTo: [],
      });

      // Try to open mobile hamburger menu
      const hamburger = await mobilePage.$("button[aria-label*='menu' i], button[aria-label*='Menu' i], nav button");
      if (hamburger) {
        await hamburger.click();
        await mobilePage.waitForTimeout(500);
        const menuScreenshot = path.join(SCREENSHOT_DIR, `${slug}-mobile-menu.png`);
        await mobilePage.screenshot({ path: menuScreenshot });
        states.push({
          url: routePath,
          name: `${slug}-mobile-menu`,
          type: "menu",
          screenshot: `/images/site-flows/${SITE_NAME}/${slug}-mobile-menu.png`,
          linksTo: [],
        });
        console.log(`  ${routePath} (mobile menu captured)`);
      }

      await mobileCtx.close();

      // Check for modals / dialogs
      const modalTriggers = await desktopPage.$$("[data-modal], [aria-haspopup='dialog'], button:has-text('Book'), button:has-text('Contact')");
      for (let i = 0; i < Math.min(modalTriggers.length, 3); i++) {
        try {
          await modalTriggers[i].click();
          await desktopPage.waitForTimeout(500);
          const modalScreenshot = path.join(SCREENSHOT_DIR, `${slug}-modal-${i}.png`);
          await desktopPage.screenshot({ path: modalScreenshot });
          states.push({
            url: routePath,
            name: `${slug}-modal-${i}`,
            type: "modal",
            screenshot: `/images/site-flows/${SITE_NAME}/${slug}-modal-${i}.png`,
            linksTo: [],
          });
          console.log(`  ${routePath} (modal ${i} captured)`);
          // Close modal
          await desktopPage.keyboard.press("Escape");
          await desktopPage.waitForTimeout(300);
        } catch {
          // Modal interaction failed, skip
        }
      }

      // Check for hover states on nav
      if (routePath === "/") {
        const navLinks = await desktopPage.$$("nav a");
        for (let i = 0; i < Math.min(navLinks.length, 5); i++) {
          try {
            await navLinks[i].hover();
            await desktopPage.waitForTimeout(200);
          } catch {
            // Skip failed hovers
          }
        }
      }

      // Check for details/summary (accordions)
      const details = await desktopPage.$$("details:not([open])");
      if (details.length > 0) {
        for (let i = 0; i < Math.min(details.length, 3); i++) {
          try {
            const summary = await details[i].$("summary");
            if (summary) {
              await summary.click();
              await desktopPage.waitForTimeout(300);
            }
          } catch {
            // Skip
          }
        }
        const expandedScreenshot = path.join(SCREENSHOT_DIR, `${slug}-expanded.png`);
        await desktopPage.screenshot({ path: expandedScreenshot, fullPage: true });
        states.push({
          url: routePath,
          name: `${slug}-expanded`,
          type: "page",
          screenshot: `/images/site-flows/${SITE_NAME}/${slug}-expanded.png`,
          linksTo: [],
        });
        console.log(`  ${routePath} (expanded accordions captured)`);
      }
    } catch (e) {
      console.log(`  ${routePath} - FAILED: ${e}`);
    }

    await desktopCtx.close();
  }

  await browser.close();
  return states;
}

async function generateSiteMap(states: CapturedState[]) {
  const now = new Date().toISOString().split("T")[0];
  const pages = states.filter((s) => s.type === "page" && !s.name.includes("expanded"));
  const mobiles = states.filter((s) => s.type === "mobile");
  const menus = states.filter((s) => s.type === "menu");
  const modals = states.filter((s) => s.type === "modal");
  const expanded = states.filter((s) => s.name.includes("expanded"));

  const lines = [
    "---",
    `name: Site Flow — ${SITE_NAME}`,
    `source: Playwright automated capture`,
    `captured: ${now}`,
    "type: narrate",
    `total_states: ${states.length}`,
    `pages: ${pages.length}`,
    `mobile_views: ${mobiles.length}`,
    `menus: ${menus.length}`,
    `modals: ${modals.length}`,
    `expanded_states: ${expanded.length}`,
    "---",
    "",
    `# Site Flow — ${SITE_NAME}`,
    "",
    `Captured ${states.length} states across ${pages.length} pages on ${now}.`,
    "",
    "## Pages",
    "",
    "| Route | Screenshot | Links To |",
    "|---|---|---|",
    ...pages.map((s) => `| ${s.url} | ![${s.name}](${s.screenshot}) | ${s.linksTo.join(", ")} |`),
    "",
    "## Mobile Views",
    "",
    ...mobiles.map((s) => `### ${s.name}\n![${s.name}](${s.screenshot})\n`),
    "",
    "## Menus",
    "",
    ...menus.map((s) => `### ${s.name}\n![${s.name}](${s.screenshot})\n`),
    "",
    "## Modals",
    "",
    ...modals.map((s) => `### ${s.name}\n![${s.name}](${s.screenshot})\n`),
    "",
    "## Expanded States",
    "",
    ...expanded.map((s) => `### ${s.name}\n![${s.name}](${s.screenshot})\n`),
    "",
    "## Navigation Flow",
    "",
    "```mermaid",
    "graph LR",
    ...pages
      .filter((s) => s.linksTo.length > 0)
      .flatMap((s) =>
        s.linksTo.map((target) => {
          const sourceName = s.url === "/" ? "Home" : s.url.replace(/\//g, "_").replace(/^_/, "");
          const targetName = target === "/" ? "Home" : target.replace(/\//g, "_").replace(/^_/, "");
          return `  ${sourceName} --> ${targetName}`;
        })
      )
      .filter((line, i, arr) => arr.indexOf(line) === i),
    "```",
  ];

  fs.writeFileSync(path.join(OUTPUT_DIR, "flow.md"), lines.join("\n"));
  console.log(`\nSite map saved to ${OUTPUT_DIR}/flow.md`);
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  console.log(`Capturing: ${BASE_URL}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Screenshots: ${SCREENSHOT_DIR}\n`);

  const states = await captureAllStates(BASE_URL);
  await generateSiteMap(states);

  console.log(`\nDone. ${states.length} total states captured.`);
}

main().catch(console.error);
