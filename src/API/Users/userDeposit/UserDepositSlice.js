import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDepositSlice = createApi({
  reducerPath: "depositApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stock-back.vercel.app/api/v1/",
  }),
  tagTypes: ["deposit"],
  endpoints: (builder) => ({
    userDeposit: builder.mutation({
      query: (depositFormData) => ({
        url: "deposit",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: depositFormData,
      }),
      invalidatesTags: ["deposit"],
    }),

    getDepositList: builder.query({
      query: () => `/deposit`,
      providesTags: ["deposit"],
    }),

    getSingleUserDepositList: builder.query({
      query: (id) => `/deposit/${id}`,
      providesTags: ["deposit"],
    }),

    updateSingleDeposit: builder.mutation({
      query: ({ id, data }) => {
        // console.log(id, data);
        return {
          url: `/deposit/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["deposit"],
    }),

    updateDeleteDeposit: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/deposit/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["deposit"],
    }),

    extraReducers: (builder) => {
      builder.addMatcher(
        userDepositSlice.endpoints.userDeposit.matchFulfilled,
        (state, action) => {
          // When the deposit API call is successful, update the state with the deposited amount
          state.depositedAmount = action.payload; // assuming your API response contains the deposited amount
        }
      );
    },
  }),
});

export const {
  useUserDepositMutation,
  useGetDepositListQuery,
  useUpdateSingleDepositMutation,
  useUpdateDeleteDepositMutation,
  useGetSingleUserDepositListQuery,
} = userDepositSlice;
