import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReceiver: builder.query({
      query: (searchText ) => ({
        url: `/user/search?searchText=${searchText }`,
        method: "GET",
      }),
    }),
    balance: builder.query({
      query: ( ) => ({
        url: "/wallet/my",
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetReceiverQuery,useBalanceQuery } = walletApi;
