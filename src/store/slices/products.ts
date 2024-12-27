import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/ProductTypes";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: Product[] | [] = []
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action:PayloadAction<Product[]>) => {
            return action.payload;
        }

    }
})

export const {setProducts}= ProductsSlice.actions;

export default ProductsSlice.reducer