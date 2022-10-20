import { fetchProducts, fetchUserInfo } from "./api";

export const endpoints = {
  products: {
    fetcher: fetchProducts,
  },
  userInfo: {
    fetcher: fetchUserInfo,
  },
} as const;

export type Endpoints = typeof endpoints;
