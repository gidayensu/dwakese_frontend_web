import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/ProductTypes";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: Product | object = {}
export const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState,
    reducers: {
        setProduct: (state, action:PayloadAction<Product>) => {
            return action.payload;
        }

    }
})

export const {setProduct}= selectedProductSlice.actions;

export default selectedProductSlice.reducer;