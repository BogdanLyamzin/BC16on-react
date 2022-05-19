import {Component} from "react";

import List from "./List";
import Statistics from "./Statistics";

import styles from "./buy-list.module.css";

import {items} from "./items";

class BuyList extends Component {

    state = {
        items: [...items]
    }

    calcTotalCount() {
        const {items} = this.state;
        return items.length;
    }

    calcTotalSum() {
        const {items} = this.state;
        const sum = items.reduce((acum, item)=> acum + item.price, 0);
        return sum;
    }

    deleteItem = (id) => {
        this.setState(prevState => {
            const {items} = prevState;
            return {
                items: items.filter(item => item.id !== id)
            }
        })
    }

    render(){
        const {items} = this.state;
        const {deleteItem} = this;

        const totalCount = this.calcTotalCount();
        const totalSum = this.calcTotalSum();

        return (
            <div className={styles.container}>
                <List items={items} deleteItem={deleteItem} />
                <Statistics totalCount={totalCount} totalSum={totalSum} />
            </div>
        )
    }
};

export default BuyList;