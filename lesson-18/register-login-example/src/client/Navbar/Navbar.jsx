import { Link, NavLink } from "react-router-dom";

import NavbarMenu from "./NavbarMenu";

import styles from "./navbar.module.scss";

const getActiveLink = ({isActive}) => isActive ? styles.authLinkActive : styles.authLink;

const Navbar = ()=> {

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    <div>
                        <NavLink to="/login" className={getActiveLink}>
                            Login
                        </NavLink>
                        |
                        <NavLink to="/register" className={getActiveLink}>
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;