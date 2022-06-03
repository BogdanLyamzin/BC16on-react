import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addBook = createAction("books/add", (data) => {
    const newBook = {...data, id: nanoid()};
    return {
        payload: newBook
    }
});
/*
creatAction = (type) => {
    const func = (payload) => {
        return {
            type,
            payload
        }
    }

    func.type = type;
    func.toString = () => type;

    return func;
}
*/
export const removeBook = createAction("books/remove");

const actions = {
    addBook,
    removeBook
};

export default actions;