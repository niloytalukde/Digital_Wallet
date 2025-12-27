
import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
myTransaction: builder.query({
      query: () => ({
        url: "/transactions/my-transactions",
        method: "GET",
      }),
    }),

    allTransaction: builder.query({
      query: (params) => ({
        url: "/transactions/all-transactions",
        method: "GET",
        params
      }),
    }),

  }),
});

export const { useMyTransactionQuery,useAllTransactionQuery} = transactionApi;
