import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userLoginSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stock-back.vercel.app/api/v1",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (loginFormData) => ({
        url: "/user",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: loginFormData,
      }),
    }),

    userRegistration: builder.mutation({
      query: (userData) => ({
        url: "/user",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: userData,
      }),
    }),

    userSingleData: builder.mutation({
      query: ({ email, token }) => {
        console.log("Email:", email);
        console.log("Token:", token);

        return {
          url: "/user/single",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          // mode: "no-cors",
          method: "POST",
          body: { email: email },
        };
      },
      onSuccess: (_, variables, user) => {
        user.endpoints.userSingleData.query(); // Trigger refetch of the query
      },
      invalidatesTags: [{ type: "User" }],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegistrationMutation,
  useUserSingleDataMutation,
} = userLoginSlice;
