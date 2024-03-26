import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const botSlice = createApi({
  reducerPath: "ai-plane",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stock-back.vercel.app/api/v1/",
  }),
  tagTypes: ["ai-plane"],
  endpoints: (builder) => ({
    getBots: builder.query({
      query: () => "ai-plane",
      providesTags: ["ai-plane"],
    }),

    aiPlanPost: builder.mutation({
      query: ({ aiPlanFormData, token }) => {
        console.log(aiPlanFormData);
        return {
          url: "ai-plane",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: aiPlanFormData,
        };
      },
      invalidatesTags: ["ai-plane"],
    }),

    deleteAiPlan: builder.mutation({
      query: ({ id, email, token }) => ({
        url: `/ai-plane/${id}`,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["ai-plane"],
    }),
  }),
});

export const {
  useGetBotsQuery,
  useAiPlanPostMutation,
  useDeleteAiPlanMutation,
} = botSlice;
