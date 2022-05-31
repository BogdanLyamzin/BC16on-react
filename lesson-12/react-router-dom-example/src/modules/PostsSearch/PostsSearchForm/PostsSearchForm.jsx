import {useState} from "react";

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        q: ""
    });

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({q: ""})
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input value={state.q} name="q" onChange={handleChange} type="text" placeholder="Input text" />
        </form>
    )
}

export default PostsSearchForm;