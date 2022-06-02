import { useState, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import { getbooks } from "../../redux/books/booksSelectors";

import actionCreators from "../../redux/books/booksActionCreators";

import "./my-books.css";

const MyBooks = () => {

    const books = useSelector(getbooks, shallowEqual);

    const dispatch = useDispatch();

    const [filter, setFilter] = useState("");

    const addBook = (data) => {
        const action = actionCreators.addBook(data);
        dispatch(action);
    }

    const removeBook = (id)=> {
        dispatch(actionCreators.removeBook(id));
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
    }

    const filteredBooks = getFilteredBooks();

    return (
        <div className="my-books">
            <div className="book-add-form-container">
                <BookAddForm onSubmit={addBook} />
            </div>
            <div className="book-list-container">
                <Filter filter={filter} handleChange={changeFilter} />
                <BookList books={filteredBooks} removeBook={removeBook} />
            </div>
        </div>
    )
}

export default MyBooks;