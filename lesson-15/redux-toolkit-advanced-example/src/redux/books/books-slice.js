import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: {
            reducer(store, {payload}) {
                store.push(payload)
            },
            prepare(data) {
                const newBook = {...data, id: nanoid()};
                return {
                    payload: newBook
                }
            }
        },
        removeBook: (store, {payload}) => store.filter(({id}) => id !== payload),
    }
});

export const {actions} = booksSlice;

export default booksSlice.reducer;