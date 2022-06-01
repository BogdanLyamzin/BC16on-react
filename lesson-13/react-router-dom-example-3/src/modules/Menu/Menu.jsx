import { NavLink } from "react-router-dom";

import styles from "./menu.module.css";

import { items } from "./items";

const getActiveLink = ({isActive}) => isActive ? styles.linkActive : styles.link;

const Menu = () => {
    const elements = items.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink className={getActiveLink} to={to}>{text}</NavLink>
        </li>
    ))

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default Menu;