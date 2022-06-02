import {createStore, combineReducers} from "redux";

import booksReducer from "./books/booksReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
