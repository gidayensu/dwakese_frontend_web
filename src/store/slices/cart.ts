import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/ProductTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types/CartTypes";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProductIndex = state.findIndex(product => product.id === action.payload.id);
            const productBeingAdded = action.payload;

            if (existingProductIndex !== -1) {
                state[existingProductIndex] = {
                    ...state[existingProductIndex],
                    itemCount: (state[existingProductIndex].itemCount || 0) + productBeingAdded.itemCount
                };
            } else {
                state.push({...productBeingAdded})
            }
        }
        ,
        removeProductFromCart: (state, action: PayloadAction<Product>) => {
            const productBeingRemoved = action.payload
            state = state.filter((product)=>product.id !== productBeingRemoved.id)
        },

        decreaseProductCount: (state, action:PayloadAction<Product>) => {
            const decreasingProduct = action.payload;
            const decreasingProductIndex = state.findIndex(product=>product.id === decreasingProduct.id);
            state[decreasingProductIndex] = {...state[decreasingProductIndex], itemCount: state[decreasingProductIndex].itemCount - 1}
        },
        increaseProductCount: (state, action:PayloadAction<Product>) => {
            const increasingProduct = action.payload;
            const increasingProductIndex = state.findIndex(product=>product.id === increasingProduct.id);
            state[increasingProductIndex] = {...state[increasingProductIndex], itemCount: state[increasingProductIndex].itemCount + 1}
        },
        clearCart : ()=> {
            return  initialState;
        }

    }
})

export const {addToCart, removeProductFromCart, decreaseProductCount, increaseProductCount, clearCart}= cartSlice.actions;

export default cartSlice.reducer;