import { Component } from "react";

import {initialState} from "./initialState";

class BookForm extends Component {
    state = {...initialState}

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({...initialState})
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { title, author } = this.state;
        const { handleSubmit, handleChange } = this;

        return (

            <form action="" onSubmit={handleSubmit}>
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
        )
    }
}

export default BookForm;