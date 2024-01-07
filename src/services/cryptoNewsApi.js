import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "6cd8cd4fb4mshc2aef27d92c91a7p1908d7jsn9d27f3cf4a5c",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};
const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1";

const prepareHeaders = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => prepareHeaders("/coindesk"),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
