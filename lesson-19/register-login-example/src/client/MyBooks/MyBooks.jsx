import { useState, useEffect, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import { getbooks, getError, getLoading } from "../../redux/books/books-selectors";

import * as operations from "../../redux/books/books-operations";

import "./my-books.css";

const MyBooks = () => {

    const books = useSelector(getbooks, shallowEqual);
    const loading = useSelector(getLoading, shallowEqual);
    const error = useSelector(getError, shallowEqual);
  
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(operations.fetchBooks());
    }, [dispatch])

    const [filter, setFilter] = useState("");

    const addBook = (data) => {
        dispatch(operations.addBook(data));
    }

    const removeBook = (id) => {
        dispatch(operations.removeBook(id));
    }

    const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

    const getFilteredBooks = () => {
        if (!filter) {
            return books;
        }
        const filterStr = filter.toLowerCase()
        const result = books.filter(item => {
            const title = item.title.toLowerCase();
            return title.includes(filterStr);
        });
        return result;
    };

    const filteredBooks = getFilteredBooks();
    
    return (
        <div className="my-books">
            <div className="book-add-form-container">
                <BookAddForm onSubmit={addBook} />
            </div>
            <div className="book-list-container">
                <Filter filter={filter} handleChange={changeFilter} />
                {loading && <p>...Loading</p>}
                {error && <p>{error.message}</p>}
                {Boolean(filteredBooks.length) && <BookList books={filteredBooks} removeBook={removeBook} />}
            </div>
        </div>
    )
}

export default MyBooks;