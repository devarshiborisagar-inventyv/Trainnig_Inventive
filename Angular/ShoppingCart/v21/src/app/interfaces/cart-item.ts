import { Product } from "./product";

export interface CartItem {
    product:Product,
    quentity:number,
    totalItemPrice:number
}
