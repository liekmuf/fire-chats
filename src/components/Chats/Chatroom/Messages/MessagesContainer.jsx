import ChatMessage from "./Message/AnotherUserMessage"
import UserMessage from "./Message/CurrentUserMessage"
import styles from "./MessagesContainer.module.css"
import React from "react"

const timeStampToDate = timestamp => new Date(timestamp?.seconds * 1000)

const getTime = date => {
    const hours = date.getHours()
    const minutes = `0${date.getMinutes()}`.slice(-2)
    return isNaN(date) ? '' : `${hours}:${minutes}`
}

const MessageContainer = ({ messages, uid }) => {
    return <div className={styles.container}>
        {messages && messages.map(msg => {
            if (uid === msg.uid) return <UserMessage
                key={msg.id}
                text={msg.text}
                createdAt={getTime(timeStampToDate(msg.createdAt))} />
            return <ChatMessage
                userName={msg.userName}
                photoUrl={msg.photoURL}
                isSend={uid === msg.uid}
                key={msg.id}
                text={msg.text}
                createdAt={getTime(timeStampToDate(msg.createdAt))} />
        })}
    </div>
}
export default React.memo(MessageContainer)