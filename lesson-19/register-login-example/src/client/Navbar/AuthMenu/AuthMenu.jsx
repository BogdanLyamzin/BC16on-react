import { NavLink } from "react-router-dom";

import styles from "./auth-menu.module.css";

const getActiveLink = ({isActive}) => isActive ? styles.authLinkActive : styles.authLink;

const AuthMenu = () => {
    return (
        <div>
            <NavLink to="/login" className={getActiveLink}>
                Login
            </NavLink>
            |
            <NavLink to="/register" className={getActiveLink}>
                Register
            </NavLink>
        </div>
    )
}

export default AuthMenu;