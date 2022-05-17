import PropTypes from "prop-types";

const NavbarMenuItem = ({link, text}) => {
    return (
        <li className='navbar-nav-item'>
            <a href={link}>{text}</a>
        </li>
    )
}

export default NavbarMenuItem;

NavbarMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}