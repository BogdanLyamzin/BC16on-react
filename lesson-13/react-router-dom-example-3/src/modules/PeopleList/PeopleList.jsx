import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

import styles from "./people-list.module.css";

const PeopleList = ({ items }) => {
    const location = useLocation();
    const elements = items.map(({ name, height, mass }, index) => (
        <Link key={nanoid()} state={{from: location}} to={`/people/${index + 1}`} className={styles.link}>
            <li className={styles.item}>
                <h4>{name}</h4>
                <p>Рост: {height}. Вес: {mass}.</p>
            </li>
        </Link>
    ))
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PeopleList;