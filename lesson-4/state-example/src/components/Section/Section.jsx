import styles from "./section.module.css";

const Section = ({ title, children }) => {
    return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    </section>)
}

export default Section;