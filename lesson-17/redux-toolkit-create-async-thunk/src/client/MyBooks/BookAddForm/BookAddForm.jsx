import { useState } from "react";
import PropTypes from "prop-types";

import "./book-add-form.css"

import { initialState } from "./initialState";

const BookAddForm = ({onSubmit}) => {
    const [form, setForm] = useState({...initialState});

    const handleChange = ({target}) => {
        const {name, value, type, checked} = target;
        const newValue = type === "checkbox" ? checked : value;
        setForm({
            ...form,
            [name]: newValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...form});
        setForm({...initialState})
    }

    const {title, author, favorite} = form;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Название книги</label>
                <input value={title} onChange={handleChange} required name="title"  type="text" className="form-group-input" placeholder="Название книги" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Автор</label>
                <input value={author} onChange={handleChange} required name="author"  type="text" className="form-group-input" placeholder="Автор книги" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Любимая</label>
                <input onChange={handleChange} name="favorite" checked={form.favorite}  type="checkbox" className="form-group-input" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label"></label>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

BookAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

// class BookAddForm extends Component {
//     state = {
//         title: "",
//         author: "",
//     }

        // static propTypes = {
        //     onSubmit: PropTypes.func.isRequired
        // }

//     handleSubmit = (e)=> {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.resetForm()
//     }

//     handleChange = (e)=> {
//         const {name, value} = e.target;
//         this.setState({
//             [name]: value
//         })
//     }

//     resetForm(){
//         this.setState({
//             title: "",
//             author: ""
//         });
//     }

//     render() {
//         const {title, author} = this.state;
//         const {handleChange, handleSubmit} = this;

//         return (
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="" className="form-group-label">Название книги</label>
//                     <input value={title} required name="title" onChange={handleChange} type="text" className="form-group-input" placeholder="Название книги" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="" className="form-group-label">Автор</label>
//                     <input value={author} required name="author" onChange={handleChange} type="text" className="form-group-input" placeholder="Автор книги" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="" className="form-group-label"></label>
//                     <button type="submit">Добавить</button>
//                 </div>
//             </form>
//         )

//     }
// }

export default BookAddForm;