import axios from "axios";

import instance from "./auth";

export const getBooks = async() => {
    const {data} = await instance.get("/books");
    // const {data} = await axios.get("/books");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await instance.post("/books", data);
    // const {data: result} = await axios.post("/books", data);
    return result;
}

export const removeBook = async(id) => {
    const {data} = await instance.delete(`/books/${id}`);
    // const {data} = await axios.delete(`/books/${id}`);
    return data;
}