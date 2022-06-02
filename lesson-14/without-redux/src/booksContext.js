import { useState, createContext } from "react";
import { nanoid } from "nanoid";

export const booksContext = createContext([]);

const BooksContext = ({children}) => {
    const [books, setBooks] = useState([]);

    const addBook = (data) => {
        setBooks(prevState => {
            const newBook = {
                ...data,
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

    return (
        <booksContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </booksContext.Provider>
    )
}

export default BooksContext;