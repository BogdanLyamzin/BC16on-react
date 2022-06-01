import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import { getPeopleById, getFilmById } from "../../shared/api/star-wars";

const SinglePeopleFilmsPage = () =>{
    const [films, setFilms] = useState({
        items: [],
        loading: false,
        error: null
    });

    const {id} = useParams();

    useEffect(()=> {
        const fetchFilms = async()=> {
            try {
                setFilms(prevState => ({...prevState, loading: true}));
                const {films: filmsUrls} = await getPeopleById(id);
                const filmsRequests = filmsUrls.map(url => axios.get(url));
                const results = await Promise.allSettled(filmsRequests);
                const items = results
                    .filter(({status}) => status === "fulfilled")
                    .map(({value}) => value.data);
                setFilms(prevState => ({...prevState, items, loading: false}));
            } catch ({message}) {
                setFilms(prevState => ({...prevState, loading: false, error: message}))
            }
        }
        fetchFilms();
    }, []);

    const {items, loading, error} = films;
    const elements = items.map(({episode_id, title}) => (
        <li key={episode_id}>
            <h4>{title}</h4>
            <p>Эпизод: {episode_id}</p>
        </li>
    ))

    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            {Boolean(items.length) && (
                <ul>
                    {elements}
                </ul>
            )}
        </div>
    )
}

export default SinglePeopleFilmsPage;