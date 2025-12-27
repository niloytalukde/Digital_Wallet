import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    userGetMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      })
    }),

getAllAgent: builder.query({
      query: () => ({
        url: "/user/agent",
        method: "GET",
      })
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/update/${id}`,
        method: "PATCH",
        data: data, 
      }),
      
    }),
  updateUserStatus: builder.mutation({
  query: ({ id, data }) => ({
    url: `/user/block/${id}`,
    method: "PATCH",
    body: data, 
  }),
}),

  approvedAgent: builder.mutation({
  query: ({ id, data }) => ({
    url: `/user/approve-agent/${id}`,
    method: "PATCH",
    body: data, 
  }),
}),


  }),
});

export const {
  useUserGetMeQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useUpdateUserStatusMutation,
  useGetAllAgentQuery,
  useApprovedAgentMutation
} = userApi;
