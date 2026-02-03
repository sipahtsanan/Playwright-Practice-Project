// tests/register-user.spec.ts
import { test, expect } from '../../fixtures/web/register-user.fixture.ts';

test('Test Case 1: Register User', async ({ registeredUser }) => {
  expect(registeredUser.email).toBeTruthy();
});
