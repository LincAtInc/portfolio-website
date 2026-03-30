import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", title: "Lincoln Mitchell" },
  { path: "/work", title: "Featured Work" },
  { path: "/headless-ds", title: "Headless Design Systems" },
  { path: "/podcast", title: "LINC Podcast" },
  { path: "/thoughts", title: "AI is assistive" },
  { path: "/thoughts/scout-bees", title: "Scout bees" },
  { path: "/thoughts/dyslexic-advantage", title: "Dyslexic" },
  { path: "/thoughts/digital-samsara", title: "Digital" },
  { path: "/thoughts/make-culture", title: "Design thinking" },
  { path: "/thoughts/stakeholder-simulator", title: "Stakeholder" },
];

for (const page of pages) {
  test(`${page.path} loads and renders`, async ({ page: p }) => {
    const response = await p.goto(page.path);
    expect(response?.status()).toBe(200);
    await expect(p.locator("body")).toContainText(page.title, { ignoreCase: true });
  });
}

test("navigation links work", async ({ page }) => {
  await page.goto("/");
  await page.click('a[href="/work"]');
  await expect(page).toHaveURL("/work");
  await expect(page.locator("body")).toContainText("Featured Work");
});

test("thoughts sidebar renders on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.goto("/thoughts");
  await expect(page.locator("aside")).toBeVisible();
});

test("theme switcher is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("select").first()).toBeVisible();
});

test("bennie-james shows passcode gate", async ({ page }) => {
  await page.goto("/bennie-james");
  await expect(page.locator('input[type="password"]')).toBeVisible();
});
