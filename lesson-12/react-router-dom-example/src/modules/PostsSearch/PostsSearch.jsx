import {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";

import PostList from "../PostList";
import PostsSearchForm from "./PostsSearchForm";

import { searchPosts } from "../../shared/services/posts";

const PostsSearch = ()=> {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(prevState => ({ ...prevState, loading: true }));
            try {
                const result = await searchPosts(q);
                setPosts(prevState => ({ ...prevState, loading: false, items: result }))
            } catch (error) {
                setPosts(prevState => ({ ...prevState, loading: false, error: error.message }))
            }
        }
        if(q) {
            fetchPosts();
        }
    }, [q]);

    const onSubmit = ({q}) => setSearchParams({q});

    return (
        <>
        <PostsSearchForm onSubmit={onSubmit}  />
        <PostList items={posts.items} />
        </>
    )
}

export default PostsSearch;