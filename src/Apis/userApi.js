import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: "user"
            }),
            providesTags: ["User"]
        }),
       
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `user/` + id,
                method: "DELETE",
            }),
            invalidatesTags: ["User"]
        })
    
    }),
})

export const {
   useGetUserQuery,
   useDeleteUserMutation,
} = userApi
export default userApi;