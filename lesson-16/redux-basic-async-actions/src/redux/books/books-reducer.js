import { combineReducers } from "redux";

import * as types from "./books-types";

const items = (store = [], {type, payload}) => {
    switch(type){
        case types.FETCH_BOOKS_SUCCESS:
            return payload;
        case types.ADD_BOOK_SUCCESS:
            return [...store, payload];
        case types.REMOVE_BOOK_SUCCESS:
            return store.filter(item => item.id !== payload);
        default:
            return store;
    }
}

const loading = (store = false, {type}) => {
    switch(type){
        case types.FETCH_BOOKS_REQUEST:
            return true;
        case types.FETCH_BOOKS_SUCCESS:
        case types.FETCH_BOOKS_ERROR:
            return false;
        case types.ADD_BOOK_REQUEST:
            return true;
        case types.ADD_BOOK_SUCCESS:
        case types.ADD_BOOK_ERROR:
            return false;
        case types.REMOVE_BOOK_REQUEST:
            return true;
        case types.REMOVE_BOOK_SUCCESS:
        case types.ADD_BOOK_ERROR:
            return false;      
        default:
            return store;
    }
}

const error = (store = null, {type, payload}) => {
    switch(type){
        case types.FETCH_BOOKS_REQUEST:
            return null;
        case types.FETCH_BOOKS_ERROR:
            return payload;
        case types.ADD_BOOK_REQUEST:
            return null;
        case types.ADD_BOOK_ERROR:
            return payload;
        case types.REMOVE_BOOK_REQUEST:
            return null;
        case types.ADD_BOOK_ERROR:
            return payload;       
        default:
            return store;
    }
}
/*
const booksReducer = (store = initialStore, {type, payload}) => {
    switch(type){
        case types.FETCH_BOOKS_REQUEST:
            return {...store, loading: true};
        case types.FETCH_BOOKS_SUCCESS:
            return {...store, loading: false, items: payload};
        case types.FETCH_BOOKS_ERROR:
            return {...store, loading: false, error: payload};
        case types.ADD_BOOK_REQUEST:
            return {...store, loading: true};
        case types.ADD_BOOK_SUCCESS:
            return {...store, loading: false, items: [...store.items, payload]};
        case types.ADD_BOOK_ERROR:
            return {...store, loading: false, error: payload}
        case types.REMOVE_BOOK_REQUEST:
            return {...store, loading: true};
        case types.REMOVE_BOOK_SUCCESS:
            const newBooks = store.items.filter(item => item.id !== payload);
            return {...store, loading: false, items: newBooks};
        case types.ADD_BOOK_ERROR:
            return {...store, loading: false, error: payload}        
        default:
            return store;
    }
}
*/

const booksReducer = combineReducers({
    items,
    loading,
    error
});

export default booksReducer;