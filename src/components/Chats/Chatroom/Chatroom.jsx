import { useEffect, useRef, useContext } from 'react'
import styles from './Сhatroom.module.css'
import MessageContainer from './Messages/MessagesContainer'
import ChatroomHeader from './ChatroomHeader/ChatroomHeader'
import SendForm from '../../Commons/SendForm/SendForm'
import ScrollDown from '../../Commons/ScrollDown/ScrollDown'
import { getCurrentUserInfo } from '../../../firebase/auth'
import { DeviceContext } from '../../../context/DeviceContext'
import { sendMessage, useData } from '../../../firebase/messages'

const ChatRoom = ({ currentChat, showSidebar, isSidebarHiden }) => {
    const isMobile = useContext(DeviceContext)
    const bottomRef = useRef()

    const messages = useData(`chats/${currentChat.id}/messages`, 'createdAt')
    const uid = getCurrentUserInfo().uid

    const scrollDown = (behavior) => {
        return () => bottomRef.current.scrollIntoView({ behavior })
    }

    useEffect(() => scrollDown("auto")(), [messages])

    const onSendClick = (text) => {
        sendMessage(text, currentChat.id)
    }
    const className = `${styles.chatroom} ${isMobile && !isSidebarHiden ? styles.hiden : ""}`

    return (
        <div className={className}>
            <ChatroomHeader chatName={currentChat.name}
                showSidebar={showSidebar}
                isMobile={isMobile} />
            {currentChat.id ?
                <>
                    <MessageContainer
                        messages={messages}
                        uid={uid}
                    />
                    <ScrollDown scroll={scrollDown("smooth")} />
                    <div ref={bottomRef}></div>
                    <div></div>
                    <SendForm send={onSendClick} />
                </> : <div className={styles.selectchat}>Select a chat to start messaging</div>}
            <div ref={bottomRef}></div>

        </div>)
}

export default ChatRoom