import { apiSlice } from "../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/getall",
      transformResponse: res=>  res.reverse(),

      providesTags: ["Posts"]
    }),
    postBlog: builder.mutation({
      query: (blog) => ({
        url: "/post",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["Posts"],
    }),
    deleteBlog:builder.mutation({
      query:({id}) =>({
        url:`/blogdelete/${id}`,
        method:'DELETE',
        body:id
      }),
      invalidatesTags:['Posts']
    }),
    updateBlog:builder.mutation({
      query:({id})=>({
        url:`blogupdate/${id}`,
        method:'PATCH',
        body:id
      }),
      invalidatesTags:['Posts']
    })

  }),
});

export const {useGetPostsQuery, usePostBlogMutation,useDeleteBlogMutation,useUpdateBlogMutation } = extendedApiSlice;
