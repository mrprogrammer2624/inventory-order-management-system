import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/Slice/authSlice';
import productReducer from '@/Slice/productSlice';
import orderReducer from '@/Slice/orderSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    order: orderReducer,
  },
});