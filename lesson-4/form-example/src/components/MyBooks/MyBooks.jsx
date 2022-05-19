import { Component } from "react";
import {nanoid} from "nanoid";

import styles from "./my-books.module.css";

class MyBooks extends Component {
    state = {
        items: [],
        title: "",
        author: ""
    }

    addBook = (e)=> {
        e.preventDefault();
        this.setState(prevState => {
            const {title, author, items} = prevState;
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

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    deleteBook = (id) => {
        this.setState(prevState => {
            const {items} = prevState;

            return {
                items: items.filter(item => item.id !== id)
            }
        })
    }

    render(){
        const {items, title, author} = this.state;
        const {addBook, handleChange, deleteBook} = this;

        const elements = items.map(({id, title, author}) => (
            <li key={id}>Название: {title}. Автор: {author} 
                <button onClick={()=> deleteBook(id)}>Delete</button>
            </li>
        ));

        return (
            <div className={styles.container}>
                <div>
                    <form action="" onSubmit={addBook}>
                        <div>
                            <label htmlFor="">Название</label>
                            <input value={title} type="text" name="title" onChange={handleChange} placeholder="Название" />
                        </div>
                        <div>
                            <label htmlFor="">Автор</label>
                            <input value={author} type="text" name="author" onChange={handleChange} placeholder="Автор" />
                        </div>
                        <button type="submit">Добавить</button>                      
                    </form>
                </div>
                <div>
                    <ul>
                        {elements}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MyBooks;