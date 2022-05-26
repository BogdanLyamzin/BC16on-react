// import { Component } from "react";
import {useState} from "react";
import PropTypes from "prop-types";

import styles from "./header-menu.module.scss";

const HeaderMenu = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const elements = items.map((item, index) => {
        const className = (index === activeIndex) ? styles.linkActive : styles.link;
        return (
            <li key={item.id}>
                <a onClick={() => setActiveIndex(index)} href={item.link} className={className}>{item.text}</a>
            </li>
        )
    });

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

// class HeaderMenu extends Component {

//     static defaultProps = {
//         items: []
//     }

//     state = {
//         activeIndex: 0
//     }

//     handleClick = (idx) => {
//         this.setState({
//             activeIndex: idx
//         })
//     }

//     render() {
//         const { items } = this.props;
//         const { activeIndex } = this.state;
//         const {handleClick} = this;

//         const elements = items.map((item, index) => {
//             const className = (index === activeIndex) ? styles.linkActive : styles.link;
//             // const className = (index === activeIndex) ? `${styles.link} ${styles.active}` : styles.link;
//             return (
//                 <li key={item.id}>
//                     <a onClick={() => handleClick(index)} href={item.link} className={className}>{item.text}</a>
//                 </li>
//             )
//         });

//         return (
//             <ul className={styles.menu}>
//                 {elements}
//             </ul>
//         )
//     }
// }

export default HeaderMenu;

HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

