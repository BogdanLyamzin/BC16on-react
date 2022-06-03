import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (store, {payload}) => [...store, payload],
        remove: (store, {payload}) => store.filter(({id}) => id !== payload),
    }
});

export const {actions} = cartSlice;

export default cartSlice.reducer;