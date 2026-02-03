// fixtures/register-user.fixture.ts
import { test as base, expect } from '@playwright/test';
import { registerUser } from '../../data/web/register';
import {
  openHomePage,
  verifyHomePageVisible,
  clickSignupLogin,
  clickContinue
} from '../../pages/common';
import {
  verifyNewUserSignupVisible,
  enterNameAndEmail,
  verifyEnterAccountInfo,
  fillAccountInformation,
  fillAddressInformation,
  verifyAccountCreated,
  verifyLoggedIn
} from '../../pages/register';

type RegisterFixture = {
  registeredUser: {
    name: string;
    email: string;
    password: string;
  };
};

export const test = base.extend<RegisterFixture>({
  registeredUser: async ({ page }, use) => {
    await openHomePage(page, registerUser.register_url);
    await verifyHomePageVisible(page);

    await clickSignupLogin(page);
    await verifyNewUserSignupVisible(page);

    await enterNameAndEmail(page, registerUser.name, registerUser.email);
    await verifyEnterAccountInfo(page);

    await fillAccountInformation(page, registerUser);
    await fillAddressInformation(page, registerUser);

    await verifyAccountCreated(page);
    await clickContinue(page);

    await verifyLoggedIn(page, registerUser.name);

    await use({
      name: registerUser.name,
      email: registerUser.email,
      password: registerUser.password
    });
  }
});

export { expect };