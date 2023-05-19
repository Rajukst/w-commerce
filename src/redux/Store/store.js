
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../allFeatures/Auth/authSlice";
import apiSlice from "../allFeatures/apiSlice/apiSlice";
import cartSlice from "../allFeatures/Cart/cartSlice";

const store= configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth: authSlice,
        carts: cartSlice,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;