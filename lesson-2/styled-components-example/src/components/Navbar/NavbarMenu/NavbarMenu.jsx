import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import NavbarMenuItem from "./NavbarMenuItem";

import "./navbar-menu.css";

const NavbarNav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    .navbar-nav-item {
        margin: 0 10px;
    }
`

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
        <NavbarNav>
            {elements}
        </NavbarNav>
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