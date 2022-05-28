import BookListItem from "./BookListItem";

const BookList = ({ items, deleteBook }) => {
    const elements = items.map(item => (<BookListItem
        key={item.id}
        deleteBook={deleteBook}
        {...item} />));

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BookList;