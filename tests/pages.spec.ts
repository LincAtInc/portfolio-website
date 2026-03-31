import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", title: "Lincoln Mitchell" },
  { path: "/work", title: "Featured Work" },
  { path: "/headless-ds", title: "Headless Design Systems" },
  { path: "/podcast", title: "MITCHELL Podcast" },
  { path: "/thoughts", title: "AI is assistive" },
  { path: "/thoughts/scout-bees", title: "Scout bees" },
  { path: "/thoughts/dyslexic-advantage", title: "Dyslexic" },
  { path: "/thoughts/digital-samsara", title: "Digital" },
  { path: "/thoughts/make-culture", title: "Design thinking" },
  { path: "/thoughts/stakeholder-simulator", title: "Stakeholder" },
  { path: "/thoughts/beyond-ui", title: "Beyond the Screen" },
  { path: "/thoughts/approved-in-theory", title: "Approved in Theory" },
  { path: "/thoughts/room-after-the-talk", title: "Room After the Talk" },
  { path: "/thoughts/product-primitives", title: "The Interface I Designed" },
  { path: "/explore", title: "What do you want to know?" },
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

test("explore page has intent input and chip buttons", async ({ page }) => {
  await page.goto("/explore");
  await expect(page.locator('input[aria-label="Enter your intent"]')).toBeVisible();
  await expect(page.locator("button", { hasText: "Who is Lincoln?" })).toBeVisible();
});

test("explore page deep link ?q= triggers surface", async ({ page }) => {
  await page.goto("/explore?q=Who+is+Lincoln%3F");
  await expect(page.locator('input[aria-label="Enter your intent"]')).toHaveValue("Who is Lincoln?");
  await expect(page.locator("body")).toContainText("Lincoln Mitchell");
});
