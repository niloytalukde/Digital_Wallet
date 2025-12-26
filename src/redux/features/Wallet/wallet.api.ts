import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReceiver: builder.query({
      query: (searchText ) => ({
        url: `/user/search?query=${searchText }`,
        method: "GET",
      }),
    }),
    balance: builder.query({
      query: () => ({
        url: "/wallet/my",
        method: "GET",
      }),
    }),
    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/send",
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

export const { useGetReceiverQuery,useBalanceQuery,useSendMoneyMutation,useWithdrawMoneyMutation } = walletApi;
