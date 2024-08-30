import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"

    }),
    tagTypes: ["Orders"],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderDetails) => ({
                url: "order",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: orderDetails
            }),
            invalidatesTags: ["Orders"],
        }),
        getAllOrder: builder.query({
            query: ({ userId, searchString, status, pageSize, pageNumber }) => ({
                url: "order",
                params: {
                    ...(userId && { userId }),
                    ...(searchString && { searchString }),
                    ...(status && { status }),
                    ...(pageSize && { pageSize }),
                    ...(pageNumber && { pageNumber })

                }
            }),
            transformResponse(apiResonse, meta) {
                return {
                    apiResonse,
                    totalRecords: meta.response.headers.get("X-Pagination"),
                }
            },
            providesTags: ["Orders"]
        }),
        getOrderDetals: builder.query({
            query: (id) => ({
                url: `order/${id}`,

            }),
            providesTags: ["Orders"]
        }),
        updateOrderHeader: builder.mutation({
            query: (orderDetails) => ({
                url: `order?id=${orderDetails.orderHeaderId}`,
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: orderDetails
            }),
            invalidatesTags: ["Orders"]
        }),
        updateShipperOrderHeader: builder.mutation({
            query: (orderDetails) => ({
                url: `order/UpdateShipper/${orderDetails.orderHeaderId}`,
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: orderDetails
            }),
            invalidatesTags: ["Orders"]
        })
        
    }),
})

export const {
    useCreateOrderMutation,
    useGetAllOrderQuery,
    useGetOrderDetalsQuery,
    useUpdateOrderHeaderMutation,
    useUpdateShipperOrderHeaderMutation,

} = orderApi
export default orderApi;