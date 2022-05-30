import { NavLink } from "react-router-dom";

import "./header-menu.css";

const getActiveLink = ({isActive}) => {
    return isActive ? "header-menu-link link-active" : "header-menu-link"
}

const HeaderMenu = () => {

    return (
        <ul className="header-menu">
            <li>
                <NavLink to="/" className={getActiveLink}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/posts-search" className={getActiveLink}>Posts Search</NavLink>
            </li>
            <li>
                <NavLink to="/my-books" className={getActiveLink}>My books</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={getActiveLink}>Contacts</NavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu;