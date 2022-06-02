import { useSelector, shallowEqual } from "react-redux";

import { getFavoriteBooks } from "../../redux/books/booksSelectors";

const MyFavoriteBooksPage = ()=> {

    const books = useSelector(getFavoriteBooks, shallowEqual);

    const elements = books.map(({id, title, author}) => (
        <li key={id}>
            Автор: {author}. Название: {title}.
        </li>
    ))
    return (
        <main>
            <div className="container">
                <h2 className="page-title">My favorite books Page</h2>
                <ul>
                   {elements}
                </ul>
            </div>
        </main>
    )
}

export default MyFavoriteBooksPage;