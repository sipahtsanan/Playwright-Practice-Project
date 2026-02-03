// api/clients/product.client.ts
import { APIRequestContext } from '@playwright/test';
import { PRODUCT_API } from '../../data/api/product.api';

export async function getAllProducts(api: APIRequestContext) {
  return await api.get(PRODUCT_API.PRODUCTS_LIST);
}

export async function getAllProductsUnsuccess(api: APIRequestContext) {
  return await api.post(PRODUCT_API.PRODUCTS_LIST);
}