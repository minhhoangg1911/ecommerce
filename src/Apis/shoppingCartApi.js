import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const shoppingCartApi = createApi({
    reducerPath: "shoppingCartApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7095/api/"
    }),
    tagTypes: ["ShoppingCarts"],
    endpoints: (builder) => ({
        getShoppingCart: builder.query({
            query: (userId) => ({
                url: `shoppingcart`,
                params: {
                    userId: userId
                }
            }),
            providesTags: ["ShoppingCarts"]
        }),
        updateShoppingCart: builder.mutation({
            query: ({ foodId, updateQuantityBy, userId }) => ({
                url: "shoppingcart",
                method: "POST",
                body: {
                    foodId,
                    updateQuantityBy,
                    userId,
                },
            }),
            invalidatesTags: ["ShoppingCarts"]
        }),
    }),
});

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation } = shoppingCartApi
export default shoppingCartApi; 