import { baseApi } from "@/redux/baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReceiver: builder.query({
      query: (searchText ) => ({
        url: `/user/search?query=${searchText }`,
        method: "GET",
      }),
    }),
    cashIn: builder.mutation({
      query: (payload) => ({
        url: "/agent/cash-in",
        method: "POST",
        data:payload
      }),
    }),
    cashOut: builder.mutation({
      query: (payload) => ({
        url: "/agent/cash-out",
        method: "POST",
        data:payload
      }),
    }),
    withdrawMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data:payload
      }),
    }),
  }),
});

export const { useGetReceiverQuery,useCashInMutation,useWithdrawMoneyMutation,useCashOutMutation } = agentApi;
