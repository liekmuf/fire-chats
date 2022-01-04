import ChatsListSearch from "../../../Commons/Search/Search";
import ChatListItem from "./ChatListItem/ChatsListItem";
import { useState } from "react";
import styles from "./ChatsList.module.css"
import Burger from "../../../Commons/Burger/Burger";
import { useData } from "../../../../firebase/messages";

const ChatsList = ({ currentChat, setCurrentChat, onProfile, hideSidebar }) => {
    const chats = useData('chats', 'name')
    const [searchValue, setSearchValue] = useState("")
    const search = text => {
        setSearchValue(text.toUpperCase())
    }

    const onChatSelectedCreator = (name, id) => {
        return () => {
            hideSidebar()
            setCurrentChat({ name, id })
        }
    }
    return <div className={styles.list}>
        <div className={styles.wrapper}>

            <div className={styles.container}>
                <Burger onClick={onProfile} />
                <ChatsListSearch search={search} />
            </div>

            {chats && chats.filter(chat => ~chat.name.toUpperCase().indexOf(searchValue))
                .map(chat => <ChatListItem
                    isCurrentChat={currentChat.id === chat.id}
                    setCurrentChat={onChatSelectedCreator(chat.name, chat.id)}
                    key={chat.key}
                    name={chat.name} />)}
        </div>

    </div>
}

export default ChatsList