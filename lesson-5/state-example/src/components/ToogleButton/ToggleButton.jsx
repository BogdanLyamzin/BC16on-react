import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./toggle-button.module.scss";

class ToggleButton extends Component {
    state = {
        isActive: false
    }

    handleClick = () => {
        this.setState(prevState => {
            const {isActive} = prevState;
            return {
                isActive: !isActive
            }
        })
    }

    render(){
        const {text} = this.props;
        const {isActive} = this.state;
        const {handleClick} = this;

        const className = isActive ? styles.btnActive : styles.btn;

        return (
            <button onClick={handleClick} className={className}>{text}</button>
        )
    }
}

export default ToggleButton;