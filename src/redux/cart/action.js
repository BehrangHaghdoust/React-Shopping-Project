
import { ADD_TO_CART ,INCREMENT ,DECREMENT, REMOVE_FROM_CART ,CLEAR_CART} from "./actionType";

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
export const removeFromCart = (productId)=> {
    return {
        type:REMOVE_FROM_CART,
        payload:productId

    }
}

export const clearCartProduct = ()=> {
    return {
        type:CLEAR_CART,

    }
}


