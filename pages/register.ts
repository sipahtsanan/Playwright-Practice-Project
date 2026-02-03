// keywords/register.keyword.ts
import { Page, expect } from '@playwright/test';

export async function verifyNewUserSignupVisible(page: Page) {
  await expect(page.locator('text=New User Signup!')).toBeVisible();
}

export async function enterNameAndEmail(
  page: Page,
  name: string,
  email: string
) {
  await page.fill('[data-qa="signup-name"]', name);
  await page.fill('[data-qa="signup-email"]', email);
  await page.click('[data-qa="signup-button"]');
}

export async function verifyEnterAccountInfo(page: Page) {
  await expect(
    page.locator('text=Enter Account Information')
  ).toBeVisible();
}

export async function fillAccountInformation(page: Page, user: any) {
  await page.fill('[data-qa="password"]', user.password);
  await page.selectOption('[data-qa="days"]', '1');
  await page.selectOption('[data-qa="months"]', '1');
  await page.selectOption('[data-qa="years"]', '2000');

  await page.check('#newsletter');
  await page.check('#optin');
}

export async function fillAddressInformation(page: Page, user: any) {
  await page.fill('[data-qa="first_name"]', user.firstName);
  await page.fill('[data-qa="last_name"]', user.lastName);
  await page.fill('[data-qa="company"]', user.company);
  await page.fill('[data-qa="address"]', user.address);
  await page.selectOption('[data-qa="country"]', user.country);
  await page.fill('[data-qa="state"]', user.state);
  await page.fill('[data-qa="city"]', user.city);
  await page.fill('[data-qa="zipcode"]', user.zipcode);
  await page.fill('[data-qa="mobile_number"]', user.mobile);

  await page.click('[data-qa="create-account"]');
}

export async function verifyAccountCreated(page: Page) {
  await expect(page.locator('text=Account Created!')).toBeVisible();
}

export async function verifyLoggedIn(page: Page, name: string) {
  await expect(page.locator(`text=Logged in as ${name}`)).toBeVisible();
}

export async function deleteAccount(page: Page) {
  await page.click('text=Delete Account');
  await expect(page.locator('text=Account Deleted!')).toBeVisible();
}
