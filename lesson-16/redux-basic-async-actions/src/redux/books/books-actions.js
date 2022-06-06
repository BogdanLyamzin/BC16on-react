import * as types from "./books-types";

const fetchBooksRequest = ()=> {
    return {
        type: types.FETCH_BOOKS_REQUEST
    }
}

const fetchBooksSuccess = (payload) => {
    return {
        type: types.FETCH_BOOKS_SUCCESS,
        payload
    }
}

const fetchBooksError = (payload) => {
    return {
        type: types.FETCH_BOOKS_ERROR,
        payload
    }
}


const addBookRequest = () => {
    return {
        type: types.ADD_BOOK_REQUEST
    }
}

const addBookSuccess = (payload) => {
    return {
        type: types.ADD_BOOK_SUCCESS,
        payload
    }
}

const addBookError = (payload) => {
    return {
        type: types.ADD_BOOK_ERROR,
        payload
    }
}


const removeBookRequest = ()=> {
    return {
        type: types.REMOVE_BOOK_REQUEST
    }
}

const removeBookSuccess = (payload) => {
    return {
        type: types.REMOVE_BOOK_SUCCESS,
        payload
    }
}

const removeBookError = (payload) => {
    return {
        type: types.REMOVE_BOOK_ERROR,
        payload
    }
}

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