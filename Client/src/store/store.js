import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import adminProductsSlice from "./productSlice";

const store=configureStore({
    reducer:{
    auth:authReducer,
    adminProducts:adminProductsSlice,
    
    }
})

export default store;