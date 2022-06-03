import {configureStore} from "@reduxjs/toolkit";

import booksReducer from "./books/books-reducer";
import cartReducer from "./cart/cart-reducer";

const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer
    }
})

export default store;
