import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["Comment"],
    endpoints: (builder) => ({
        getComment: builder.query({
            query: () => ({
                url: "comment"
            }),
            providesTags: ["Comment"]
        }),
         getCommentById: builder.query({
            query: (id) => ({
                url: `comment/${id}`,
            }),
            providesTags: ["Comment"]
        }),
        createComment: builder.mutation({
            query: (data) => ({
                url: `comment`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Comment"]
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `comment?id=` + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Comment"]
        })
    
    }),
})

export const {
    useGetCommentQuery,
    useGetCommentByIdQuery,
    useCreateCommentMutation,
    useDeleteCommentMutation,
} = commentApi
export default commentApi;