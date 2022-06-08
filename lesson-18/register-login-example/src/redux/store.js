import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/books-slice";
import authReducer from "./auth/auth-slice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer
    }
})

export default store;
