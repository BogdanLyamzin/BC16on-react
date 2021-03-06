import { createAction } from "@reduxjs/toolkit"

const fetchBooksRequest = createAction("books/fetch/request");
const fetchBooksSuccess = createAction("books/fetch/success");
const fetchBooksError = createAction("books/fetch/error");

const addBookRequest = createAction("books/add/request");
const addBookSuccess = createAction("books/add/success");
const addBookError = createAction("books/add/error");

const removeBookRequest = createAction("books/remove/request");
const removeBookSuccess = createAction("books/remove/success");
const removeBookError = createAction("books/remove/error");

const actionCreators = {
    fetchBooksRequest,
    fetchBooksSuccess,
    fetchBooksError,
    
    addBookRequest,
    addBookSuccess,
    addBookError,

    removeBookRequest,
    removeBookSuccess,
    removeBookError,
};

export default actionCreators;