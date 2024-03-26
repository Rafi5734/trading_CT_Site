import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userMediaSlice = createApi({
  reducerPath: "Media",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stock-back.vercel.app/api/v1/",
  }),
  tagTypes: ["Media"],
  endpoints: (builder) => ({
    mediaPost: builder.mutation({
      query: (postData) => ({
        url: "media-post",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Media"],
    }),

    getMediaList: builder.query({
      query: () => `/media-post`,
      providesTags: ["Media"],
    }),

    deleteMedia: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/media-post/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Media"],
    }),
  }),
});
export const {
  useMediaPostMutation,
  useGetMediaListQuery,
  useDeleteMediaMutation,
} = userMediaSlice;
