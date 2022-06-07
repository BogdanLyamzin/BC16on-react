import axios from "axios";

const instsance = axios.create({
    baseURL: "https://629da4e53dda090f3c06b5e9.mockapi.io/api/v1/books"
});

export const getBooks = async() => {
    const {data} = await instsance.get("/");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await instsance.post("/", data);
    return result;
}

export const removeBook = async(id) => {
    const {data} = await instsance.delete(`/${id}`);
    return data;
}