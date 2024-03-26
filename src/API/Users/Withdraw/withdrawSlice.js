import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const withdrawSlice = createApi({
  reducerPath: "withdraw",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stock-back.vercel.app/api/v1/",
  }),
  tagTypes: ["user_withdraw"],
  endpoints: (builder) => ({
    withdrawPost: builder.mutation({
      query: (withdrawFormData) => ({
        url: "withdraw",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: withdrawFormData,
      }),
      invalidatesTags: ["user_withdraw"],
    }),

    getWithdrawList: builder.query({
      query: () => `/withdraw`,
      providesTags: ["withdraw"],
    }),

    getSingleUserWithdrawList: builder.query({
      query: (id) => `/withdraw/${id}`,
      providesTags: ["withdraw"],
    }),

    updateDeleteWithdraw: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/withdraw/${id}`,
          method: "DELETE",
          body: {},
        };
      },
      invalidatesTags: ["withdraw"],
    }),

    updateSingleWithdraw: builder.mutation({
      query: ({ id, data }) => {
        // console.log(id, data);
        return {
          url: `/withdraw/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["withdraw"],
    }),
  }),
});

export const {
  useWithdrawPostMutation,
  useGetWithdrawListQuery,
  useUpdateSingleWithdrawMutation,
  useUpdateDeleteWithdrawMutation,
  useGetSingleUserWithdrawListQuery,
} = withdrawSlice;
