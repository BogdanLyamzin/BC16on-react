import styles from "./button.module.css";

const Button = ({children, className}) => {
    const fullClassName = `${styles.btn} ${className}`;

    return <button className={fullClassName}>{children}</button>
};

export default Button;

Button.defaultProps = {
    className: ""
}