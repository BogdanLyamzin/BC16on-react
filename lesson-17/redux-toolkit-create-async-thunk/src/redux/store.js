import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/books-slice";
import cartReducer from "./cart/cart-slice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer
    }
})

export default store;
