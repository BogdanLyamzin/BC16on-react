import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cart/cart-operations";

import styles from "./product-list.module.scss";

const ProductList = ({items})=> {
    const dispatch = useDispatch();

    const handleClick = (product)=> {
        dispatch(addToCart(product));
    }

    const elements = items.map(item => (
        <li className={styles.item} key={item.id}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price_container}>
                <span>Price: {item.price}</span>
                <button onClick={()=> handleClick(item)} className={styles.buy_button}>Buy</button>
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