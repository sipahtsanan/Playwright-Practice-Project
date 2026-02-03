// keywords/common.keyword.ts
import { Page, expect } from '@playwright/test';

export async function openHomePage(page: Page, url: string) {
  await page.goto(url);
}

export async function verifyHomePageVisible(page: Page) {
  await expect(page.locator('body')).toBeVisible();
}

export async function clickSignupLogin(page: Page) {
  await page.click('text=Signup / Login');
}

export async function clickContinue(page: Page) {
  await page.click('text=Continue');
}

export async function logoutAndVerifyLoginPage(page: Page) {
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(
    page.getByRole('heading', { name: 'Login to your account' })
  ).toBeVisible();
}
