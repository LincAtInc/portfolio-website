import { chromium } from "playwright";
import * as fs from "fs";

const BASE_URL = "https://viberoles.com";
const OUTPUT = "inc/narrate/job-market/viberoles-listings.md";

async function scrape() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Get page 1 to find total pages and listing structure
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  // Extract all visible job listings
  const listings: { title: string; company: string; location: string; url: string; tags: string[] }[] = [];

  const totalPages = 29; // Lincoln confirmed 29 pages

  for (let p = 1; p <= totalPages; p++) {
    const url = p === 1 ? BASE_URL : `${BASE_URL}/?page=${p}`;
    console.log(`Scraping page ${p}/${totalPages}...`);

    await page.goto(url, { waitUntil: "networkidle", timeout: 15000 }).catch(() => {
      console.log(`  Page ${p} timeout, retrying...`);
      return page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
    });

    // Wait for job cards to render
    await page.waitForTimeout(2000);

    // Extract listings from this page
    const pageListings = await page.evaluate(() => {
      const results: { title: string; company: string; location: string; url: string; tags: string[] }[] = [];

      // Try common job card selectors
      const cards = document.querySelectorAll("a[href*='/job'], a[href*='/role'], article, [class*='job'], [class*='card'], [class*='listing'], [class*='role']");

      cards.forEach((card) => {
        const el = card as HTMLElement;
        const title = el.querySelector("h2, h3, [class*='title']")?.textContent?.trim() || "";
        const company = el.querySelector("[class*='company'], [class*='org']")?.textContent?.trim() || "";
        const location = el.querySelector("[class*='location'], [class*='place']")?.textContent?.trim() || "";
        const link = el.closest("a")?.href || el.querySelector("a")?.href || "";
        const tags = Array.from(el.querySelectorAll("[class*='tag'], [class*='badge'], [class*='skill']")).map(
          (t) => (t as HTMLElement).textContent?.trim() || ""
        );

        if (title && title.length > 3) {
          results.push({ title, company, location, url: link, tags });
        }
      });

      // If no structured cards found, try getting all text content
      if (results.length === 0) {
        const body = document.body.innerText;
        return [{ title: "RAW_PAGE_TEXT", company: "", location: "", url: "", tags: [body.substring(0, 3000)] }];
      }

      return results;
    });

    listings.push(...pageListings);
    console.log(`  Found ${pageListings.length} listings on page ${p}`);
  }

  await browser.close();

  // Generate markdown
  const now = new Date().toISOString().split("T")[0];
  const lines = [
    "---",
    "name: Viberoles Job Board Analysis",
    "source: viberoles.com",
    `scraped: ${now}`,
    "type: narrate",
    `total_listings: ${listings.length}`,
    "---",
    "",
    "# Viberoles — AI-Native Job Listings",
    "",
    `Scraped ${listings.length} listings across ${totalPages} pages on ${now}.`,
    "",
    "| # | Title | Company | Location | Tags |",
    "|---|---|---|---|---|",
    ...listings.map((l, i) => `| ${i + 1} | ${l.title} | ${l.company} | ${l.location} | ${l.tags.join(", ")} |`),
  ];

  fs.writeFileSync(OUTPUT, lines.join("\n"));
  console.log(`\nSaved ${listings.length} listings to ${OUTPUT}`);
}

scrape().catch(console.error);
