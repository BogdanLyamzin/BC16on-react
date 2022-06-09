import { NavLink } from "react-router-dom";

import styles from "./navbar-menu.module.scss";

import { items } from "./items";

const getACtiveClass = ({ isActive }) => isActive ? styles.linkActive : styles.link;

const NavbarMenu = ({ isLogin }) => {
    const menuItems = items.filter(item => item.private === isLogin);
    const elements = menuItems.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink to={to} className={getACtiveClass}>
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