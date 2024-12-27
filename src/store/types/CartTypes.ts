import { Product } from "./ProductTypes";

export interface CartItem extends Product {
    itemCount: number
}