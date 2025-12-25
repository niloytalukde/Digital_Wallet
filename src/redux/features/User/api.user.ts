import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
userGetMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
        providesTags: ["User"],
      }),
    }),
updateUser: builder.mutation({
  query: ({ id, data }) => ({
    url: `/user/update/${id}`,
    method: "PATCH",
    data: data,
    invalidatesTags: ["User"]
  }),
}),


  

  }),
});

export const { useUserGetMeQuery,useUpdateUserMutation} = userApi;
