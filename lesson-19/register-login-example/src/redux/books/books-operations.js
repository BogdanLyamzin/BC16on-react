import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/books";

export const fetchBooks = createAsyncThunk(
    "books/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const data = await API.getBooks();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addBook = createAsyncThunk(
    "books/add",
    async (data, { rejectWithValue }) => {
        try {
            const newBook = await API.addBook(data);
            return newBook;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { books } = getState();
            const dublicate = books.items.find(item => item.title === data.title);
            if (dublicate) {
                alert(`${data.title} is already in book list`);
                return false;
            }
            return data;
        },
    }
)

export const removeBook = createAsyncThunk(
    "books/remove",
    async (id, { rejectWithValue }) => {
        try {
            const { id: deleteId } = await API.removeBook(id);
            return deleteId;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)