import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/products",
})

export const getProducts = async ()=> {
    const {data} = await instance.get("/");
    return data;
}