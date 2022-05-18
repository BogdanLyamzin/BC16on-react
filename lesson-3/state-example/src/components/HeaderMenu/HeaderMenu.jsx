import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./header-menu.module.scss";
/*
class Component {
    constructor(props) {
        this.props = props;
    }

    setState(){

    }
}
*/
class HeaderMenu extends Component {
    /*
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.handleClick = ()=> {
            this.setState({
                activeIndex: 2
            })
        }
    }
    */
    static defaultProps = {
        items: []
    }

    state = {
        activeIndex: 0
    }

    handleClick = (idx) => {
        this.setState({
            activeIndex: idx
        })
    }

    render() {
        const { items } = this.props;
        const { activeIndex } = this.state;
        const {handleClick} = this;

        const elements = items.map((item, index) => {
            const className = (index === activeIndex) ? styles.linkActive : styles.link;
            // const className = (index === activeIndex) ? `${styles.link} ${styles.active}` : styles.link;
            return (
                <li key={item.id}>
                    <a onClick={() => handleClick(index)} href={item.link} className={className}>{item.text}</a>
                </li>
            )
        });

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

/*
const HeaderMenu = ({ items }) => {
    const handleClick = ()=> {
        console.log("Click")
    };

    const elements = items.map(item => (
        <li key={item.id} onClick={handleClick}>
            <a href={item.link} className={styles.link}>{item.text}</a>
        </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
};
*/
export default HeaderMenu;

HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

