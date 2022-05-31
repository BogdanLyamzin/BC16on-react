import { useState, useEffect } from "react";

import PostList from "../../modules/PostList";

import { getPosts } from "../../shared/services/posts";

const HomePage = () => {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null
    });

    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(prevState => ({ ...prevState, loading: true }));
            try {
                const result = await getPosts();
                setPosts(prevState => ({ ...prevState, loading: false, items: result }))
            } catch (error) {
                setPosts(prevState => ({ ...prevState, loading: false, error: error.message }))
            }
        }
        fetchPosts()
    }, []);

    const { items, loading, error } = posts;
    return (
        <div>
            <h2>Home page</h2>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            <PostList items={items} />
        </div>
    )
}

export default HomePage;