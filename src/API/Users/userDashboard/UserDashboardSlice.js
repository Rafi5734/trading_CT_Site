import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userLoginSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "BASE_URL/user_dashboard",
  }),
  tagTypes: ["user_dashboard"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/add_user",
      providesTags: ["add_user"],
    }),
  }),
});

// user dashboard data show and update all are come from localStorage...
