import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './slices/products';
import selectedProductReducer from './slices/selectedProduct';
import cartReducer from './slices/cart';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        selectedProduct: selectedProductReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;