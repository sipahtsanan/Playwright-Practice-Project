// fixtures/api/api.fixture.ts
import { test as base, expect, request, APIRequestContext } from '@playwright/test';
import { API_ENV } from '../../data/api/env';

type ApiFixtures = {
  api: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
  api: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: API_ENV.BASE_URL,
    });

    await use(apiContext);
    await apiContext.dispose();
  },
});

export { expect };