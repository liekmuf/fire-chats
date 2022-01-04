import styles from "./Burger.module.css"

const Burger = (props) =>{
    return <div className={styles.burger} {...props}>
        <div className={styles.line}></div>
        <div className={`${styles.line} ${styles.second}`}></div>
        <div className={`${styles.line} ${styles.third}`}></div>
    </div>
}
export default Burger