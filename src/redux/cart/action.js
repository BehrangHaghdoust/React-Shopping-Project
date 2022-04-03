import { ADD_TO_CART ,INCREMENT ,DECREMENT} from "./actionType";

export const addToCard = (product)=> {
    return {
        type:ADD_TO_CART,
        payload:product
    }
}

export const increment = (productId)=> {
    return {
        type:INCREMENT,
        payload:productId

    }
}
export const decrement = (productId)=> {
    return {
        type:DECREMENT,
        payload:productId

    }
}