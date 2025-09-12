import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shop } from "../pages/Home";

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
  }),
});

export const { useGetShopsQuery, useGetRestaurantQuery } = api;

export default api;
