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
getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
    logOut: builder.mutation({
      query: (payload) => ({
        url: "/auth/logout",
        method: "POST",
        data:payload
      }),
    }),
     UpdatePassword: builder.mutation({
  query: (  payload  ) => ({
    url: `/auth/changePassword`,
    method: "PATCH",
    data: payload , 
  }),
}),

  }),
});

export const { useLoginMutation,useRegisterMutation,useGetMeQuery ,useLogOutMutation,useUpdatePasswordMutation} = authApi;
