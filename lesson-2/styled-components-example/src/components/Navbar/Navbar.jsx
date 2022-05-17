import PropTypes from "prop-types";
import styled from "@emotion/styled";

import NavbarMenu from "./NavbarMenu";
import Button from "../Button";

import "./navbar.css";

const Logo = styled.a`
    tex-decoration: none;
    font-size: 24px;
    font-weight: bold;
`

const Navbar = ({menuItems}) => {
    return (
        <nav>
            <div className='container'>
                <div className='navbar-row'>
                    <Logo>Logo</Logo>
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

