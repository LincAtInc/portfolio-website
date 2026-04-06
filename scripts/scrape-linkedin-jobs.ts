import { chromium } from "playwright";
import * as fs from "fs";

const OUTPUT = "inc/narrate/job-market/linkedin-ds-jobs.md";

const searches = [
  { query: "design systems", location: "United Kingdom", label: "UK" },
  { query: "design systems", location: "Australia", label: "AU" },
  { query: "design systems architect", location: "United Kingdom", label: "UK-Architect" },
  { query: "design systems lead", location: "United Kingdom", label: "UK-Lead" },
  { query: "agentic design", location: "", label: "Global-Agentic" },
];

async function scrape() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const allListings: { title: string; company: string; location: string; search: string; url: string }[] = [];

  for (const search of searches) {
    console.log(`\nSearching: "${search.query}" in ${search.location || "Global"}...`);

    const locationParam = search.location ? `&location=${encodeURIComponent(search.location)}` : "";
    const url = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(search.query)}${locationParam}&f_TPR=r604800`;

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 }).catch(() => {
      console.log("  Timeout, continuing...");
    });

    await page.waitForTimeout(3000);

    const listings = await page.evaluate(() => {
      const results: { title: string; company: string; location: string; url: string }[] = [];

      // LinkedIn public job search results
      const cards = document.querySelectorAll(".base-card, .job-search-card, [class*='job-card'], li");

      cards.forEach((card) => {
        const el = card as HTMLElement;
        const titleEl = el.querySelector("h3, h4, [class*='title'], [class*='heading']");
        const companyEl = el.querySelector("[class*='company'], [class*='subtitle'], h4 + span");
        const locationEl = el.querySelector("[class*='location'], [class*='caption']");
        const linkEl = el.querySelector("a[href*='/jobs/']") as HTMLAnchorElement;

        const title = titleEl?.textContent?.trim() || "";
        const company = companyEl?.textContent?.trim() || "";
        const location = locationEl?.textContent?.trim() || "";
        const link = linkEl?.href || "";

        if (title && title.length > 5 && title.length < 200) {
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

  // Deduplicate by title + company
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
    "name: LinkedIn DS Job Listings (UK & AU)",
    "source: linkedin.com/jobs",
    `scraped: ${now}`,
    "type: narrate",
    `total_listings: ${unique.length}`,
    "---",
    "",
    "# LinkedIn Design Systems Jobs — UK & Australia",
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
