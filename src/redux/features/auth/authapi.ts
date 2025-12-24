import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        data: payload, 
      }),
    }),
Register: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        data: payload, 
      }),
    }),



  }),
});

export const { useLoginMutation,useRegisterMutation } = authApi;
