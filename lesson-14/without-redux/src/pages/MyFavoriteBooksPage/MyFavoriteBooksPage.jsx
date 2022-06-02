import { useContext } from "react";

import { booksContext } from "../../booksContext";

const MyFavoriteBooksPage = ()=> {
    const {books} = useContext(booksContext);

    const favoriteBooks = books.filter(({favorite}) => favorite);

    const elements = favoriteBooks.map(({id, title, author}) => (
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