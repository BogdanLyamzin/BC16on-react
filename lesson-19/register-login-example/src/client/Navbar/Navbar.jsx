import { Link } from "react-router-dom";

import NavbarMenu from "./NavbarMenu";
import AuthMenu from "./AuthMenu";
import UserMenu from "./UserMenu";

import useLogin from "../../shared/hooks/useLogin";

import styles from "./navbar.module.scss";

const Navbar = ()=> {

    const isLogin = useLogin();

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu isLogin={isLogin} />
                    {isLogin && <UserMenu />}
                    {!isLogin && <AuthMenu />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;