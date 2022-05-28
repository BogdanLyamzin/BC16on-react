import { useState, useEffect, useRef, useCallback } from "react";
import { nanoid } from "nanoid";

import BookForm from "./BookForm";
import BookList from "./BookList";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    const firstRender = useRef(true);

    useEffect(()=> {
        if(firstRender.current) {
            const data = localStorage.getItem("books");
            const books = JSON.parse(data);
            if(data?.length) {
                setItems(books)
            }
            firstRender.current = false;
        }
    }, []);

    useEffect(()=> {
        if(!firstRender.current) {
            localStorage.setItem("books", JSON.stringify(items));
        }
    }, [items])

    const addBook = useCallback((data) => {
        const dublicate = items.find(item => item.title === data.title);
        if (dublicate) {
            alert(`${data.title} is already in books list`);
            return;
        }

        setItems(prevItems => {
            const { title, author } = data;
            const newBook = {
                title,
                author,
                id: nanoid()
            };
            return [...prevItems, newBook];
        });
    }, [setItems])

    const deleteBook = useCallback((id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }, [setItems]);

    const changeFilter = useCallback(({ target }) => setFilter(target.value), [setFilter]);

    const filterText = filter.toLowerCase();
    const filteredBooks = items.filter(({ title }) => {
        const result = title.toLowerCase().includes(filterText);
        return result;
    });

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

export default MyBooks;