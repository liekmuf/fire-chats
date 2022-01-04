import styles from "./ChatMessage.module.css"

const UserMessage = ({ text, createdAt }) => {
    return <div className={styles.message}>
        <span className={styles.wrapper}>
            <div className={styles.info}>
                <span className={styles.text} >{text}</span>
                <div className={styles.time}>{createdAt}</div>
            </div>
        </span></div>
}
export default UserMessage