import { createReducer } from "@reduxjs/toolkit";

import {addToCart, removeFromCart} from "./cart-actions";

const cartReducer = createReducer([], {
    [addToCart]: (store, {payload}) => [...store, payload],
    [removeFromCart]: (store, {payload}) => store.filter(({id}) => id !== payload),
});

export default cartReducer;