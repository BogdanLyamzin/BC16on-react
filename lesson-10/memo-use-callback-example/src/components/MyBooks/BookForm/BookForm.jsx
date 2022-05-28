import { memo } from "react";

import useForm from "../../../shared/hooks/useForm";

import { initialState } from "./initialState";

const BookForm = ({ onSubmit }) => {
    const {state, handleChange, handleSubmit} = useForm(initialState, onSubmit);

    const { title, author } = state;

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

export default memo(BookForm);