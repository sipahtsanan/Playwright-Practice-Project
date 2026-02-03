// tests/api/product-api.spec.ts
import { test } from '../../fixtures/api/api.fixture.ts';
import { 
    getAllProducts, 
    getAllProductsUnsuccess
} from '../../api/clients/product.client';
import { 
    expectProductListSuccess,
    expectProductListUnsuccess 
} from '../../api/validators/product.validator';



test('API 1: Get All Products List', async ({ api }) => {
  const response = await getAllProducts(api);
  await expectProductListSuccess(response);
});

test('API 2: Get All Products List Unsuccess', async ({ api }) => {
  const response = await getAllProductsUnsuccess(api);
  await expectProductListUnsuccess(response);
});