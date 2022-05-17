import PropTypes from "prop-types";

import "./button.css";

const btnStyles = {
    display: "inline-block",
    border: "1px solid red",
    borderRadius: "5px",
    padding: "10px 15px",
    textAlign: "center",
    color: "red",
    backgroundColor: "#fff",
    cursor: "pointer"
}

const Button = ({text, type, active})=> {
  
    return (
        // <button className={`btn ${active ? "active" : ""}`}>{text}</button>
        <button type={type} style={btnStyles} >{text}</button>
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