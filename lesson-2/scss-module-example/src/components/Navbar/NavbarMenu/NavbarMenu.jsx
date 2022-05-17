import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import NavbarMenuItem from "./NavbarMenuItem";

import styles from "./navbar-menu.module.scss";

const NavbarMenu = ({ items }) => {
    const elements = items.map(({id, ...props}) => (
        <NavbarMenuItem key={id} {...props} />
    ));
    // const elements = items.map(item => (
    //     <li key={item.id} className='navbar-nav-item'>
    //         <a href={item.link}>{item.text}</a>
    //     </li>
    // ));

    // const elements = items.map(item => (
    //     <li key={nanoid()} className='navbar-nav-item'>
    //         <a href={item.link}>{item.text}</a>
    //     </li>
    // ));

    // const elements = items.map(({link, text}, index) => (
    //     <li key={index} className='navbar-nav-item'>
    //         <a href={link}>{text}</a>
    //     </li>
    // ));
    
    return (
        <ul className={styles.nav}>
            {elements}
        </ul>
    )
};

export default NavbarMenu

NavbarMenu.defaultProps = {
    items: []
}

NavbarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}