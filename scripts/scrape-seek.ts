import { chromium } from "playwright";
import * as fs from "fs";

const OUTPUT = "inc/narrate/job-market/seek-ds-jobs.md";

const searches = [
  { query: "design systems", label: "DS" },
  { query: "design systems architect", label: "DS-Architect" },
  { query: "design systems lead", label: "DS-Lead" },
  { query: "design tokens", label: "Tokens" },
  { query: "UX design lead", label: "UX-Lead" },
];

async function scrape() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const allListings: { title: string; company: string; location: string; search: string; url: string }[] = [];

  for (const search of searches) {
    console.log(`\nSearching Seek: "${search.query}"...`);

    const url = `https://www.seek.com.au/${encodeURIComponent(search.query)}-jobs?sortmode=ListedDate`;

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 }).catch(() => {
      console.log("  Timeout, continuing...");
    });

    await page.waitForTimeout(3000);

    const listings = await page.evaluate(() => {
      const results: { title: string; company: string; location: string; url: string }[] = [];

      const cards = document.querySelectorAll("[data-testid='job-card'], article, [class*='_card'], [data-automation='job-card']");

      cards.forEach((card) => {
        const el = card as HTMLElement;
        const titleEl = el.querySelector("a[data-automation='jobTitle'], h3 a, [class*='title'] a, a[href*='/job/']");
        const companyEl = el.querySelector("[data-automation='jobCompany'], [class*='company'], [class*='advertiser']");
        const locationEl = el.querySelector("[data-automation='jobLocation'], [class*='location']");

        const title = titleEl?.textContent?.trim() || "";
        const company = companyEl?.textContent?.trim() || "";
        const location = locationEl?.textContent?.trim() || "";
        const link = (titleEl as HTMLAnchorElement)?.href || "";

        if (title && title.length > 5) {
          results.push({ title, company, location, url: link });
        }
      });

      return results;
    });

    console.log(`  Found ${listings.length} listings`);

    listings.forEach((l) => {
      allListings.push({ ...l, search: search.label });
    });
  }

  await browser.close();

  // Deduplicate
  const seen = new Set<string>();
  const unique = allListings.filter((l) => {
    const key = `${l.title}|${l.company}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Generate markdown
  const now = new Date().toISOString().split("T")[0];
  const lines = [
    "---",
    "name: Seek AU DS Job Listings",
    "source: seek.com.au",
    `scraped: ${now}`,
    "type: narrate",
    `total_listings: ${unique.length}`,
    "---",
    "",
    "# Seek Australia — Design Systems Jobs",
    "",
    `Scraped ${unique.length} unique listings on ${now}.`,
    "",
    "| # | Title | Company | Location | Search |",
    "|---|---|---|---|---|",
    ...unique.map((l, i) => `| ${i + 1} | ${l.title} | ${l.company} | ${l.location} | ${l.search} |`),
  ];

  fs.writeFileSync(OUTPUT, lines.join("\n"));
  console.log(`\nSaved ${unique.length} unique listings to ${OUTPUT}`);
}

scrape().catch(console.error);
