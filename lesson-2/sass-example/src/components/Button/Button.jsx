import PropTypes from "prop-types";

import "./button.css";

const Button = ({text, type, active})=> {
    const fullClassName = `btn ${active ? "active" : ""}`;
    return (
        // <button className={`btn ${active ? "active" : ""}`}>{text}</button>
        <button type="" className={fullClassName}>{text}</button>
    )
};

export default Button;

Button.defaultProps = {
    type: "button"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    active: PropTypes.bool
}