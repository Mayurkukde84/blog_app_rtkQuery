import { apiSlice } from "../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getPosts:builder.query({
            query:()=>'/getall',
            providesTags:['Posts']
        })
    })
})

export const {useGetPostsQuery} = extendedApiSlice