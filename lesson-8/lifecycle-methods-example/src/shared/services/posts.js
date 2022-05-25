import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        _limit: 5
    }
    // params: {
    //     key: "",
    //     image_type: "photo",
    //     orientation: "horizontal",
    //     per_page: 12
    // }
})

export const searchPosts = async (q, _page = 1) => {
    const {data} = await instance.get("/", {
        params: {
            q,
            _page
        }
    });
    return data;
}

export const getPosts = async () => {
    const {data} = await instance.get("/");
    return data;
}

export const addPost = async (newPost) => {
    const {data} = await instance.post("/", newPost);
    return data;
}

const posts = {
    searchPosts
}

export default posts;
