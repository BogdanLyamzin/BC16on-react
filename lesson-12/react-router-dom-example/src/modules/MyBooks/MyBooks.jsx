import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import "./my-books.css";

import {getFilteredBooks} from "./getFilteredBooks"

const MyBooks = ()=> {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState("");
    
    const firstRenderRef = useRef(true);

    useEffect(()=> {
        if(firstRenderRef.current) {
            const data = localStorage.getItem("books");
            const parseBooks = JSON.parse(data);
            if(parseBooks?.length) {
                setBooks(parseBooks); 
            }
            firstRenderRef.current = false;
        }
        else {
            localStorage.setItem("books", JSON.stringify(books))
        }
    }, [books])

    const changeFilter = useCallback(({target})=> setFilter(target.value), []);

    const addBook = ({title, author})=> {
        setBooks(prevState => {
            const newBook = {
                title,
                author,
                id: nanoid()
            };

            return [...prevState, newBook]
        })
    };

    const removeBook = (id) => {
        setBooks(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    };

    const filteredBooks = getFilteredBooks(filter, books);
    return (
        <div className="my-books">
            <div className="book-add-form-container">
                <BookAddForm onSubmit={addBook} />
            </div>
            <div className="book-list-container">
                <Filter filter={filter} handleChange={changeFilter} />
                <BookList removeBook={removeBook} books={filteredBooks} />
            </div>
        </div>
    )
}

export default MyBooks;