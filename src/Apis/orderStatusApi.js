import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const orderStatusApi = createApi({
    reducerPath: "orderStatusApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["orderStatus"],
    endpoints: (builder) => ({
        getOrderStatus: builder.query({
            query: ({startDate,endDate}) => ({
                url: "orderStatus",
                params: {
                    ...(startDate && { startDate }),
                    ...(endDate && { endDate }),
                }
            }),
            providesTags: ["orderStatus"]
        }),
       
    
    }),
})

export const {
   useGetOrderStatusQuery,
   
} = orderStatusApi
export default orderStatusApi;