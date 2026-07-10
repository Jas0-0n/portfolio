import { expect, test } from "@playwright/test";

test.describe("Portfolio smoke test", () => {
    test("hero is visible on page load", async ({ page }) => {
        await page.goto("/");
        await expect(page.getByText(/AI-native/)).toBeVisible();
        await expect(page.getByText(/View my work/)).toBeVisible();
        await expect(page.getByText(/Get in touch/)).toBeVisible();
    });

    test("sections reveal on scroll", async ({ page }) => {
        await page.goto("/");
        await expect(page.getByText(/Where I've been/)).toBeVisible();
        await expect(page.getByText(/Featured projects/)).toBeVisible();
        await page.getByText(/Featured projects/).scrollIntoViewIfNeeded();
        await expect(page.getByText(/Let's build something/)).toBeVisible();
    });

    test("footer social links exist", async ({ page }) => {
        await page.goto("/");
        await expect(page.getByTitle("GitHub")).toBeVisible();
        await expect(page.getByTitle("LinkedIn")).toBeVisible();
        await expect(page.getByTitle("Email")).toBeVisible();
        await expect(page.getByTitle("X / Twitter")).toBeVisible();
    });

    test("back-to-top appears after scrolling", async ({ page }) => {
        await page.goto("/");
        await page.evaluate(() => window.scrollTo(0, 600));
        await expect(page.getByRole("button", { name: "Back to top" })).toBeVisible();
    });

    test("back-to-top scrolls to top on click", async ({ page }) => {
        await page.goto("/");
        await page.evaluate(() => window.scrollTo(0, 600));
        await page.getByRole("button", { name: "Back to top" }).click();
        await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    });
});

test.describe("Portfolio mobile", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("mobile nav toggle works", async ({ page }) => {
        await page.goto("/");
        await page.getByRole("button", { name: "Toggle menu" }).click();
        await expect(page.getByText("About").first()).toBeVisible();
    });

    test("mobile nav closes on link click", async ({ page }) => {
        await page.goto("/");
        await page.getByRole("button", { name: "Toggle menu" }).click();
        await page.getByRole("link", { name: "About" }).first().click();
        await expect(page.getByText("Experience").first()).toBeHidden();
    });
});
