import styles from "./ChatListItem.module.css"

const ChatListItem = ({ name, isCurrentChat, setCurrentChat }) => {
    const className = `${styles.chat} ${isCurrentChat ? styles.active : ""}`

    const onClick = () => {
        isCurrentChat || setCurrentChat()
    }
    return <div className={className}
        onClick={onClick}>
        <div>{name}</div>
    </div>
}
export default ChatListItem