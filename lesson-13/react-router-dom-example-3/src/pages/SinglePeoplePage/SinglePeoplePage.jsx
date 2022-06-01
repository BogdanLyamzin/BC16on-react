import { useState, useEffect } from "react";
import { Link, useParams, Outlet, useNavigate, useLocation } from "react-router-dom";

import { getPeopleById } from "../../shared/api/star-wars";

const SinglePeoplePage = () => {
    const [state, setState] = useState({
        data: {},
        loading: false,
        error: null
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/people";

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                setState(prevState => ({ ...prevState, loading: true }));
                const data = await getPeopleById(id);
                setState(prevState => ({ ...prevState, data, loading: false }));
            } catch ({ message }) {
                setState(prevState => ({ ...prevState, error: message, loading: false }));
            }
        }
        fetchPerson();
    }, [setState, id]);

    const { data, loading, error } = state;
    const isData = Boolean(Object.values(data).length);

    const goBack = () => navigate(from);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            {isData && (
                <>
                    <h1>{data.name}</h1>
                    <ul>
                        <li>Рост: {data.height}</li>
                        <li>Вес: {data.mass}</li>
                        <li>Пол: {data.gender}</li>
                        <li>Цвет глаз: {data.eye_color}</li>
                    </ul>
                    <Link state={{from}} to={`/people/${id}/films`}>Фильмы</Link>
                    <Outlet />
                </>
            )}
        </div>
    )
};

export default SinglePeoplePage;