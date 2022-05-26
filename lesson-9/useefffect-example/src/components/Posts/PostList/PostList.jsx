import PropTypes from "prop-types";

import styles from "./post-list.module.css";

const PostList = ({items, onClick})=> {
    const elements = items.map(({id, title, body}) => (
        <li onClick={()=> onClick({title, body})} key={id} className={styles.item}>
            <h4>{title}</h4>
            <p>Пост № {id}</p>
        </li>
    ))
    return (<ul className={styles.list}>
        {elements}
    </ul>)
}

export default PostList;

PostList.defaultProps = {
    items: []
}

PostList.propTypes = {
    onClick: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }))
}