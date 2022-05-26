import styles from "./vote-section.module.css";

const VoteSection = ({title, children}) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </div>
    )
}

export default VoteSection;