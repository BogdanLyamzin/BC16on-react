import { Component } from "react";
import PropTypes from "prop-types";

class PostsSearch extends Component {
    state = {
        q: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.reset();
    }

    reset(){
        this.setState({
            search: ""
        })
    }

    render(){
        const {handleChange, handleSubmit} = this;
        const {q} = this.state;

        return (
            <form action="" onSubmit={handleSubmit}>
                <input value={q} onChange={handleChange} type="text" name="q" placeholder="Введите строку поиска" required />
            </form>
        )
    }
}

export default PostsSearch;

PostsSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired
}