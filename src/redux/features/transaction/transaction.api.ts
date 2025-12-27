
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
      query: () => ({
        url: "/transactions/all-transactions",
        method: "GET",
      }),
    }),

  }),
});

export const { useMyTransactionQuery,useAllTransactionQuery} = transactionApi;
