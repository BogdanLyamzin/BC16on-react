import {useState, useEffect} from "react";
import {Link, useParams, useLocation, useNavigate, Outlet} from "react-router-dom";

import { getPostById } from "../../shared/services/posts";

const SinglePostPage = () => {
    const [post, setPost] = useState({
        content: {},
        loading: false,
        error: null
    });
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from || "/";

    useEffect(()=> {
        const fetchPost = async ()=> {
            try {
                setPost(prevState => ({...prevState, loading: true}))
                const data = await getPostById(id);
                setPost(prevState => ({...prevState, content: data, loading: false}))
            } catch (error) {
                setPost(prevState => ({...prevState, error: error.message, loading: false}))
            }
        }
        fetchPost()
    }, []);

    const goBack = () => navigate(from);
    
    const {content, loading, error} = post;

    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            <button onClick={goBack}>Go back</button>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
            <Link state={{from}} to={`/posts/${id}/comments`}>Comments</Link>
            <Outlet />
        </div>
    )
}

export default  SinglePostPage;