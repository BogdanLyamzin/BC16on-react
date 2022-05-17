import PropTypes from "prop-types";

import NavbarMenu from "./NavbarMenu";
import Button from "../Button";

import "./navbar.scss";

const Navbar = ({menuItems}) => {
    return (
        <nav>
            <div className='container'>
                <div className='navbar-row'>
                    <a href="#">Logo</a>
                    <NavbarMenu items={menuItems} />
                    <Button text="Login" />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

Navbar.defaultProps = {
    menuItems: []
}

Navbar.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

