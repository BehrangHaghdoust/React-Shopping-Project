import { ADD_TO_CART } from "./actionType";

export const addToCard = (product)=> {
    return {
        type:ADD_TO_CART,
        payload:product
    }
}