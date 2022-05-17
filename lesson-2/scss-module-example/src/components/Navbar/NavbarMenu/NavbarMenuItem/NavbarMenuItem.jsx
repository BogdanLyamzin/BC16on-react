import PropTypes from "prop-types";

import styles from "./navbar-menu-item.module.scss";

const NavbarMenuItem = ({link, text}) => {
    return (
        <li className={styles.item}>
            <a className={styles.link} href={link}>{text}</a>
        </li>
    )
}

export default NavbarMenuItem;

NavbarMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}