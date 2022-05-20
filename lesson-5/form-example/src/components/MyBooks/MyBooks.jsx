import { Component } from "react";
import {nanoid} from "nanoid";

import BookForm from "./BookForm";
import BookList from "./BookList";

import styles from "./my-books.module.css";

class MyBooks extends Component {
    state = {
        items: [],
        filter: "",
    }

    addBook = (data) => {
        const {items} = this.state;
        const dublicate = items.find(item => item.title === data.title);
        if(dublicate){
            alert(`${data.title} is already in books list`);
            return;
        }

        this.setState(prevState => {
            const {items} = prevState;
            const {title, author} = data;
            const newBook = {
                title,
                author,
                id: nanoid()
            };
            return {
                items: [...items, newBook],
                title: "",
                author: ""
            }
        })
    }

    deleteBook = (id) => {
        this.setState(prevState => {
            const {items} = prevState;

            return {
                items: items.filter(item => item.id !== id)
            }
        });
    }

    changeFilter = ({target}) =>{
        this.setState({
            filter: target.value
        })
    }

    getFilteredBooks() {
        const {filter, items} = this.state;
        if(!filter){
            return items;
        }
        const filterText = filter.toLowerCase();
        const filteredBooks = items.filter(({title}) => {
            const result = title.toLowerCase().includes(filterText);
            return result;
        });
        return filteredBooks;
    }

    render(){
        const {filter} = this.state;
        const {addBook, deleteBook, changeFilter} = this;

        const items = this.getFilteredBooks();



        return (
            <div className={styles.container}>
                <div>
                    <BookForm onSubmit={addBook} />
                </div>
                <div>
                    <input onChange={changeFilter} value={filter} type="text" name="filter" placeholder="Filter books" />
                    <BookList items={items} deleteBook={deleteBook} />
                </div>
            </div>
        )
    }
}

export default MyBooks;