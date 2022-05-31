import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {getCommentsById} from "../../shared/services/posts"

const CommentsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    });

    const {id} = useParams();

    useEffect(()=> {
        const fetchComments = async() => {
            try {
                setState(prevState => ({...prevState, loading: true}))
                const comments = await getCommentsById(id);
                setState(prevstate => ({...prevstate, loading: false, items: comments}));
            } catch (error) {
                setState(prevState => ({...prevState, loading: false, error: error.message}))
            }
        }
        fetchComments();
    }, [id]);

    const elements = state.items.map(item => (
        <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Body: {item.body}</p>
        </li>
    ))

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default CommentsPage;