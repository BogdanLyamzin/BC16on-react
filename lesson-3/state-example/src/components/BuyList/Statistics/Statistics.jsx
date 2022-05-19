import styles from "../buy-list.module.css";

const Statistics = ({totalCount, totalSum}) => {

    return (
        <div className={styles.statistic}>
            <p>Всего покупок: {totalCount}</p>
            <p>На сумму: {totalSum} грн</p>
        </div>
    )
};

export default Statistics;