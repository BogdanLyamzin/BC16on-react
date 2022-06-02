import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
};

const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
};

const actionCreators = {
    addToCart,
    removeFromCart
}

export default actionCreators;