import { Link, useLocation } from "react-router-dom";

import styles from "./post-list.module.css";

const PostList = ({items}) => {
    const location = useLocation();

    const elements = items.map(({id, title}) => (
        <li key={id}>
            <Link state={{from: location}} to={`/posts/${id}`}>{title}</Link>
        </li>
    ))

    return (
        <ul>
            {elements}
        </ul>
    )
};

export default PostList;

PostList.defaultProps = {
    items: []
}