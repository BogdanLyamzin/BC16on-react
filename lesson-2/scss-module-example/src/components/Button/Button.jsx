import PropTypes from "prop-types";

import styles from "./button.module.css";
// console.log(styles);
const Button = ({text, type, active})=> {
    const fullClassName = `${styles.btn} ${active ? styles.active : ""}`;
    return (
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