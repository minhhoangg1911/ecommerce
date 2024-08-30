import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const shipperApi = createApi({
    reducerPath: "shipperApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["Shipper"],
    endpoints: (builder) => ({
        getShipper: builder.query({
            query: () => ({
                url: "shipper"
            }),
            providesTags: ["Shipper"]
        }),
        getShipperId: builder.query({
            query: (id) => ({
                url: `shipper/${id}`
            }),
            providesTags: ["Shipper"]
        }),
        createShipper: builder.mutation({
            query: (data) => ({
                url: `shipper`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Shipper"]
        }),
        updateShipper: builder.mutation({
            query: ({ data, id }) => ({
                url: `shipper/` + id,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Shipper"]
        }),
        deleteShipper: builder.mutation({
            query: (id) => ({
                url: `shipper/` + id,
                method: "DELETE",
                
            }),
            invalidatesTags: ["Shipper"]
        })
    
    }),
})

export const {
    useGetShipperQuery,
    useGetShipperIdQuery,
    useCreateShipperMutation,
    useUpdateShipperMutation,
    useDeleteShipperMutation,
} = shipperApi
export default shipperApi;