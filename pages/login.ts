import { Page, expect } from '@playwright/test';
import {   
  openHomePage,
  verifyHomePageVisible,
  clickSignupLogin,
  logoutAndVerifyLoginPage 
} from './common';
import { registerUser } from '../data/web/register';

export async function loginSuccess(
  page: Page,
  email: string,
  password: string
) {
// await page.pause();
  await logoutAndVerifyLoginPage(page);
  await page.fill('[data-qa="login-email"]', email);
  await page.fill('[data-qa="login-password"]', password);
  await page.click('[data-qa="login-button"]');
}

export async function loginUnsuccess(
  page: Page,
  email: string,
  password: string
) {
  await openHomePage(page, registerUser.register_url);
  await verifyHomePageVisible(page);
  await clickSignupLogin(page);
  await page.fill('[data-qa="login-email"]', email);
  await page.fill('[data-qa="login-password"]', password);
  await page.click('[data-qa="login-button"]');
  // await page.pause();

  await expect(
    page.getByText('Your email or password is')
  ).toBeVisible();
}