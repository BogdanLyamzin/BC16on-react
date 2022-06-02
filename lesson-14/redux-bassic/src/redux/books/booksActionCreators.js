import { nanoid } from "nanoid";
import { ADD_BOOK, REMOVE_BOOK } from "./booksTypes";

const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload: {...payload, id: nanoid()}
    }
}

const removeBook = (payload) => {
    return {
        type: REMOVE_BOOK,
        payload
    }
};

const actionCreators = {
    addBook,
    removeBook
};

export default actionCreators;