import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const orderProductApi = createApi({
    reducerPath: "orderProductApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["orderProduct"],
    endpoints: (builder) => ({
        getOrderProduct: builder.query({
            query: ({startDate,endDate}) => ({
                url: "orderProduct",
                params: {
                    ...(startDate && { startDate }),
                    ...(endDate && { endDate }),
                }
            }),
            providesTags: ["orderProduct"]
        }),
       
    
    }),
})

export const {
   useGetOrderProductQuery,
   
} = orderProductApi
export default orderProductApi;