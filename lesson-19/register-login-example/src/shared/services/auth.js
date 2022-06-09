import axios from "axios";

// axios.defaults.baseURL = "https://auth-backend-lesson.herokuapp.com/api";

const instance = axios.create({
    baseURL: "https://auth-backend-lesson.herokuapp.com/api"
});

const addToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const removeToken = ()=> {
    instance.defaults.headers.common.Authorization = "";
}

export const signup = async (body) => {
    const {data} = await instance.post("/users/signup", body);
    // const {data} = await axios.post("/signup", body);
    addToken(data.token);
    return data;
}

export const login = async (body) => {
    const {data} = await instance.post("/users/login", body);
    // const {data} = await axios.post("/login", body);
    addToken(data.token);
    return data;
}

export const getCurrent = async(token) => {
    addToken(token);
    try {
        const {data} = await instance.get("/users/current");
        return data;
    } catch (error) {
        removeToken();
        throw error;
    }
}

export const logout = async () => {
    const {data} = await instance.post("/users/logout");
    // const {data} = await axios.post("/users/logout");
    removeToken();
    return data;
}

export default instance;