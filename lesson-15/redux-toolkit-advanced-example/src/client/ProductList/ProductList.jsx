import { useDispatch } from "react-redux";

import {actions} from "../../redux/cart/cart-slice";

import styles from "./product-list.module.scss";

const ProductList = ({items})=> {
    const dispatch = useDispatch();

    const addToCart = (product)=> {
        dispatch(actions.add(product));
    }

    const elements = items.map(item => (
        <li className={styles.item} key={item.id}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price_container}>
                <span>Price: {item.price}</span>
                <button onClick={()=> addToCart(item)} className={styles.buy_button}>Buy</button>
            </p>
        </li>
    ))
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default ProductList;