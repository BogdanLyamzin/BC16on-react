import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import booksReducer from "./books/books-reducer";
import cartReducer from "./cart/cart-reducer";

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
