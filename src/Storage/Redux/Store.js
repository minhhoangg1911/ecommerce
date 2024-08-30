import { configureStore } from '@reduxjs/toolkit'
import { foodReducer } from './foodSlice'
import foodApi from '../../Apis/foodApi'
import { shoppingCartReducer } from './shoppingCartSlice'
import shoppingCartApi from '../../Apis/shoppingCartApi'
import authApi from '../../Apis/authApi'
import { userAuthReducer } from './userAuthSlice'
import paymentApi from '../../Apis/paymentApi'
import orderApi from '../../Apis/orderApi'
import commentApi from '../../Apis/commentApi'
import userApi from '../../Apis/userApi'
import shipperApi from '../../Apis/shipperApi'
import orderStatusApi from '../../Apis/orderStatusApi'
import orderProductApi from '../../Apis/orderProductApi'

const store = configureStore({
    reducer: {
        foodStore: foodReducer,
        shoppingCartStore: shoppingCartReducer,
        userAuthStore: userAuthReducer,
        [foodApi.reducerPath]: foodApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [shipperApi.reducerPath]: shipperApi.reducer,
        [orderStatusApi.reducerPath]: orderStatusApi.reducer,
        [orderProductApi.reducerPath]: orderProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(foodApi.middleware)
        .concat(commentApi.middleware)
        .concat(authApi.middleware)
        .concat(shoppingCartApi.middleware)
        .concat(paymentApi.middleware)
        .concat(orderApi.middleware)
        .concat(userApi.middleware)
        .concat(shipperApi.middleware)
        .concat(orderStatusApi.middleware)
        .concat(orderProductApi.middleware)


})

export default store