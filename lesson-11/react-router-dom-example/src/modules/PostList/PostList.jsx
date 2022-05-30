import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../../shared/services/posts";

import styles from "./post-list.module.css";

const PostList = () => {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null
    });

    useEffect(()=> {
        const fetchPosts = async() => {
            setPosts(prevState => ({...prevState, loading: true}));
            try {
                const result = await getPosts();
                setPosts(prevState => ({...prevState, loading: false, items: result}))
            } catch (error) {
                setPosts(prevState => ({...prevState, loading: false, error: error.message}))
            }
        }
        fetchPosts()
    }, []);

    const {items, loading, error} = posts;

    const elements = items.map(({id, title}) => (
        <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
        </li>
    ))

    return (
        <>
        {Boolean(items.length) && <ul>
            {elements}
        </ul>}
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        </>
    )
};

export default PostList;