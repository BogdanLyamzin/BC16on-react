import {memo} from "react";

import "./filter.css"

const Filter = ({filter, handleChange}) => {
    return (
        <div className="form-group">
            <label htmlFor="" className="form-group-label">Фильтр по названию книги</label>
            <input value={filter} name="filter" onChange={handleChange} type="text" className="form-group-input" placeholder="Фильтр по названию книги" />
        </div>
    )
}

export default memo(Filter);