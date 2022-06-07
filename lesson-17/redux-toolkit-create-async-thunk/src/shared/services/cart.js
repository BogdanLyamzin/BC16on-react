import axios from "axios";

const instance = axios.create({
    baseURL: "https://629da4e53dda090f3c06b5e9.mockapi.io/api/v1/carts"
});

export const createCart = async (products) => {
    const {data} = await instance.post("/", {products});
    return data;
}

export const addToCart = async (id, products) => {
    const {data} = await instance.put(`/${id}`, {products});
    return data;

}