import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import NavbarMenu from "./NavbarMenu";

import { getTotalItems } from "../../redux/cart/cart-selectors";

import styles from "./navbar.module.scss";

const Navbar = ()=> {
    const total = useSelector(getTotalItems, shallowEqual)
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    <span>Cart: {total}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;