import { createSlice } from "@reduxjs/toolkit";

import {addToCart} from "./cart-operations";

const initialState = {
    id: "",
    products: [],
    loading: false,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: {
        [addToCart.pending]: (store, _) => ({...store, loading: true, error: null}),
        [addToCart.fulfilled]: (store, {payload}) => ({...store, ...payload, loading: false}),
        [addToCart.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
    }
});

export default cartSlice.reducer;