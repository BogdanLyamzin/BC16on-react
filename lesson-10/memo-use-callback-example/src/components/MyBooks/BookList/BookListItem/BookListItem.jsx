import {memo} from "react";

const BookListItem = ({ id, title, author, deleteBook }) => {
    console.log(`Render ${title}`);
    return (
        <li key={id}>Название: {title}. Автор: {author}
            <button onClick={() => deleteBook(id)}>Delete</button>
        </li>
    )
}

export default memo(BookListItem);