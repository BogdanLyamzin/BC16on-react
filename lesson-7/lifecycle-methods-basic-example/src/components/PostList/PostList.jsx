import { Component } from "react";
import axios from "axios";

import styles from "./post-list.module.css";

class PostList extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(prevProps, prevState) {
        const {page} = this.state;
        console.log(page);
        console.log(prevState.page);
        if(page > prevState.page) {
            this.fetchPosts();
        }
    }

    async fetchPosts(){
        const {page} = this.state;
        this.setState({
            loading: true,
            error: null
        })
        // ?_page=1&_limit=10 - query params
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
            this.setState(({items}) => {
                // console.log(items);
                return {
                    items: [...items, ...data],
                    loading: false
                }
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error.message
            })
        } 
    }

    loadMore = (e) => {
        e.preventDefault();
        this.setState(({page}) => ({page: page + 1}));
    }

    render() {
        // console.log("Render");

        const { items, loading, error } = this.state;
        const {loadMore} = this;

        const elements = items.map(({ id, title, body }) => (
            <li key={id} className={styles.item}>
                <h4>{title}</h4>
                <p>{body}</p>
            </li>
        ))

        const isData = Boolean(items.length) || (!error && !loading);

        return (
            <>
                <h2 className={styles.heading}>Список постов</h2>
                {error && <p>Loading fail</p>}
                {isData && <ul className={styles.list}>
                    {elements}
                </ul>}
                {loading && <p>...Loading</p>}
                {isData && <div className={styles.loadMoreContainer}>
                    <button onClick={loadMore} className={styles.loadMore}>Load more</button>
                </div>}
            </>
        )
    }
}

export default PostList;