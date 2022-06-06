import * as API from "../../shared/services/books";

import actions from "./books-actions";

export const fetchBooks = ()=> {
    const func = async (dispatch)=> {
        dispatch(actions.fetchBooksRequest());
        try {
            const data = await API.getBooks();
            dispatch(actions.fetchBooksSuccess(data))
        } catch (error) {
            dispatch(actions.fetchBooksError(error));
        }
    };

    return func;
}

export const addBook = (data) => {
    const func = async(dispatch, getState) => {
        const {books} = getState();
        const dublicate = books.items.find(item => item.title === data.title);
        if(dublicate) {
            alert(`${data.title} is already in book list`);
            return;
        }
        dispatch(actions.addBookRequest());
        try {
            const newBook = await API.addBook(data);
            dispatch(actions.addBookSuccess(newBook));
        } catch (error) {
            dispatch(actions.addBookError(error));
        }
    };

    return func;
}

export const removeBook = (id) => {
    const func = async(dispatch) => {
        dispatch(actions.removeBookRequest())
        try {
            const {id: deleteId} = await API.removeBook(id);
            dispatch(actions.removeBookSuccess(deleteId));
        } catch (error) {
            dispatch(actions.removeBookError(error))
        }
    }

    return func;
}