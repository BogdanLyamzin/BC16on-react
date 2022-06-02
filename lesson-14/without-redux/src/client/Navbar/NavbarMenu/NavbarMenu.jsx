import { NavLink } from "react-router-dom";

import styles from "./navbar-menu.module.scss";

import {items} from "./items";

const getACtiveClass = ({isActive})=> isActive ? styles.linkActive : styles.link;

const NavbarMenu = () => {
    const elements = items.map(({id, to, text})=> (
        <li>
        <NavLink to={to} key={id} className={getACtiveClass}>
            {text}
        </NavLink>
    </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default NavbarMenu;