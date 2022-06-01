import {useState, useEffect} from "react";

import PeopleList from "../../modules/PeopleList";

import { getPeople } from "../../shared/api/star-wars";

const PeoplePage = ()=> {
    const [people, setPeople] = useState({
        items: [],
        loading: false,
        error: null
    });

    useEffect(()=> {
        const fetchPeople = async () => {
            try {
                setPeople(prevState => ({...prevState, loading: true}));
                const data = await getPeople();
                setPeople(prevState => ({...prevState, loading: false, items: data.results}));
            } catch (error) {
                setPeople(prevState => ({...prevState, loading: false, error: error.message}))
            }
        };
        fetchPeople();
    }, [setPeople]);

    const {items, loading, error} = people;

    return (
        <>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            <PeopleList items={items} />
        </>
    )
}

export default PeoplePage;