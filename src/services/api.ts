import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shop } from "../pages/Home";

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ebac-fake-api.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getShops: builder.query<Shop[], void>({
      query: () => "restaurantes",
    }),
    getRestaurant: builder.query<Shop, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetShopsQuery, useGetRestaurantQuery, usePurchaseMutation } =
  api;

export default api;
