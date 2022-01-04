import styles from "./ChatMessage.module.css"

const ChatMessage = ({ text, photoUrl, userName, createdAt }) => {
    return <div className={`${styles.message} ${styles.recieved}`}>
        <img className={styles.avatar} src={photoUrl} alt=""/>
        <span className={styles.wrapper}>
            <div className={styles.username}>{userName}</div>
            <div className={styles.info}>
                <span className={styles.text} >{text}</span>
                <div className={styles.time}>{createdAt}</div>
            </div>
        </span></div>
}
export default ChatMessage