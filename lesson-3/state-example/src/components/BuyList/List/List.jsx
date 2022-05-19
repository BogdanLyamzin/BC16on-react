import styles from "../buy-list.module.css";

const List = ({items, deleteItem}) => {

    const elements = items.map(({id, name, price}) => (
        <li key={id} 
            className={styles.item}>
                {name}, {price} грн 
                <button onClick={() => deleteItem(id)}>Delete</button>
        </li>
    ));

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
};

export default List;