import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import { getPostById } from "../../shared/services/posts";

const SinglePostPage = () => {
    const [post, setPost] = useState({
        content: {},
        loading: false,
        error: null
    });
    const {id} = useParams();

    useEffect(()=> {
        const fetchPost = async ()=> {
            try {
                const data = await getPostById(id);
                setPost(prevState => ({...prevState, content: data}))
            } catch (error) {
                
            }
        }
        fetchPost()
    }, []);
    
    const {content, loading, error} = post;

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
        </div>
    )
}

export default  SinglePostPage;