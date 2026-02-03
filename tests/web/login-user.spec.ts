// tests/login-user.spec.ts
import { test, expect } from '../../fixtures/web/register-user.fixture';
import { 
  loginSuccess,
  loginUnsuccess
 } from '../../pages/login';
import { registerUser } from '../../data/web/register';


test('Test Case 2: Login User success', async ({ page, registeredUser }) => {
  await loginSuccess(page, registeredUser.email, registeredUser.password);

  await expect(
    page.locator(`text=Logged in as ${registeredUser.name}`)
  ).toBeVisible();
});

test('Test Case 3: Login User fail', async ({ page }) => {
  await loginUnsuccess(page, registerUser.email_notexist, registerUser.password);

  // await expect(
  //   page.getByText('Your email or password is')
  // ).toBeVisible();
});