import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Такой страницы не существует</h2>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default NotFoundPage;