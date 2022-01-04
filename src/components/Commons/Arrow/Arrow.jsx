import styles from "./Arrow.module.css"

const Arrow  =(props)=>{
    return <div className={styles.arrow} {...props}>
        <div className={styles.arrowhead}></div>
        <div className={styles.line}></div>

    </div>
}
export default Arrow