import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const foodApi = createApi({
    reducerPath: "foodApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["Food"],
    endpoints: (builder) => ({
        getFood: builder.query({
            query: () => ({
                url: "food"
            }),
            providesTags: ["Food"]
        }),
        getFoodById: builder.query({
            query: (id) => ({
                url: `food/${id}`
            }),
            providesTags: ["Food"]
        }),
        createFood: builder.mutation({
            query: (data) => ({
                url: `food`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Food"]
        }),
        updateFood: builder.mutation({
            query: ({ data, id }) => ({
                url: `food/` + id,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Food"]
        }),
        deleteFood: builder.mutation({
            query: (id) => ({
                url: `food/` + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Food"]
        })
    
    }),
})

export const {
    useGetFoodQuery,
    useGetFoodByIdQuery,
    useCreateFoodMutation,
    useUpdateFoodMutation,
    useDeleteFoodMutation,
} = foodApi
export default foodApi;