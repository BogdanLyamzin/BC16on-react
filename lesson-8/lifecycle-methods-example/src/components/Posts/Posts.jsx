import { Component } from "react";

import PostsSearch from "./PostsSearch";
import PostList from "./PostList";

import Modal from "../../shared/components/Modal";
import Button from "../../shared/components/Button";

import { searchPosts } from "../../shared/services/posts";

import styles from "./posts.module.css";

class Posts extends Component {

    state = {
        items: [],
        loading: false,
        error: null,
        q: "",
        page: 1,
        isModalOpen: false,
        modalBody: {}
    }

    async componentDidUpdate(prevProps, prevState){
       const {q, page} = this.state;
       if(q !== prevState.q || page > prevState.page) {
           this.setState({
               loading: true,
               error: null
           });

            try {
                const items = await searchPosts(q, page);
                this.setState(prevState => {
                    return {
                        items: [...prevState.items, ...items],
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
    }

    setSearch = ({q}) => {
        this.setState({
            q,
            page: 1
        })
    }

    loadMore = () => {
        this.setState(({page}) => {
            return {
                page: page + 1
            }
        })
    }

    showModal = (modalBody) => {
        this.setState({
            isModalOpen: true,
            modalBody
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render(){
        const {loading, items, isModalOpen, modalBody} = this.state;
        const {setSearch, loadMore, showModal, closeModal} = this;

        return (
            <>
            <PostsSearch onSubmit={setSearch} />
            {Boolean(items.length) && <PostList items={items} onClick={showModal} />}
            {loading && <p>...Loading</p>}
            {!loading && Boolean(items.length) && (
            <div className={styles.btnContainer}>
                <Button onClick={loadMore} text="Load more" />
            </div>)}
            {isModalOpen &&  (
                <Modal close={closeModal}>
                    <h3>{modalBody.title}</h3>
                    <p>{modalBody.body}</p>
                </Modal>
            )}
            </>
        )
    }
}

export default Posts;