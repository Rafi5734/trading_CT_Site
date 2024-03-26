import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tradeSlice = createApi({
  reducerPath: "trade",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stock-back.vercel.app/api/v1/",
  }),
  tagTypes: ["trade"],
  endpoints: (builder) => ({
    tradeHistoryPost: builder.mutation({
      query: ({ email, token }) => ({
        url: "trade/find/single",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: { email: email },
      }),
      invalidatesTags: ["trade"],
    }),

    updateSingleRecentTrade: builder.mutation({
      query: ({ data, adminToken }) => {
        console.log(adminToken, data);
        return {
          url: `trade/update`,
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["trade"],
    }),
  }),
});
export const {
  useTradeHistoryPostMutation,
  useUpdateSingleRecentTradeMutation,
} = tradeSlice;
