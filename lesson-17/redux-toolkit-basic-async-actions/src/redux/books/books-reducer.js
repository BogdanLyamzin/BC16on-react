import { createReducer, combineReducers } from "@reduxjs/toolkit";

import actions from "./books-actions";

const items = createReducer([], {
    [actions.fetchBooksSuccess]: (_, {payload}) => payload,
    [actions.addBookSuccess]: (store, {payload}) => [...store, payload],
    [actions.removeBookSuccess]: (store, {payload}) => store.filter(item => item.id !== payload),
});

const loading = createReducer(false, {
    [actions.fetchBooksRequest]: () => true,
    [actions.fetchBooksSuccess]: () => false,
    [actions.fetchBooksError]: () => false,
    [actions.addBookRequest]: () => true,
    [actions.addBookSuccess]: () => false,
    [actions.addBookError]: () => false,
    [actions.removeBookRequest]: () => true,
    [actions.removeBookSuccess]: () => false,
    [actions.removeBookError]: () => false
});

const error = createReducer(null, {
    [actions.fetchBooksRequest]: () => null,
    [actions.fetchBooksError]: (_, {payload}) => payload,
    [actions.addBookRequest]: () => null,
    [actions.addBookError]: (_, {payload}) => payload,
    [actions.removeBookRequest]: () => null,
    [actions.removeBookError]: (_, {payload}) => payload,
});

const booksReducer = combineReducers({
    items,
    loading,
    error
});

export default booksReducer;