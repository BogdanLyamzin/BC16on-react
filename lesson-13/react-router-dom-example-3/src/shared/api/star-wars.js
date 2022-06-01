import axios from "axios";

const instance = axios.create({
    baseURL: "https://swapi.dev/api"
});

export const getPeople = async (page = 1) => {
    const {data} = await instance.get("/people", {
        params: {
            page
        }
    });
    return data;
};

export const getPeopleById = async (id) => {
    const {data} = await instance.get(`/people/${id}`);
    return data;
};

export const getFilmById = async (id) => {
    const {data} = await instance.get(`/films/${id}`);
    return data;
};

export default {
    getPeople,
    getPeopleById
}