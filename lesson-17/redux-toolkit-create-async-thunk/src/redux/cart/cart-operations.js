import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/cart";

export const addToCart = createAsyncThunk(
    "cart/add",
    async (data, {rejectWithValue, getState}) => {
        try {
            const {cart} = getState();
            if(!cart.id) {
                const newCart = await API.createCart([data]);
                return newCart;
            }
            const newCart = await API.addToCart(cart.id, [...cart.products, data]);
            return newCart;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)