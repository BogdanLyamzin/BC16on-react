import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import booksReducer from "./books/books-slice";
import authReducer from "./auth/auth-slice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: persistedAuthReducer
    }
})

export const persistor = persistStore(store);

