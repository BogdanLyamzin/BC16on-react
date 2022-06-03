import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add");

export const removeFromCart = createAction("cart/remove");

const actionCreators = {
    addToCart,
    removeFromCart
}

export default actionCreators;