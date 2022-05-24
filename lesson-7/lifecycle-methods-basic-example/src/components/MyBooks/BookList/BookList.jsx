const BookList = ({items, deleteBook}) => {
    const elements = items.map(({ id, title, author }) => (
        <li key={id}>Название: {title}. Автор: {author}
            <button onClick={() => deleteBook(id)}>Delete</button>
        </li>
    ));

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BookList;