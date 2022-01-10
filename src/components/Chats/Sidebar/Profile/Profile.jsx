import styles from "./Profile.module.css"
import { useState } from "react"
import Arrow from "../../../Commons/Arrow/Arrow"
import { useInput } from "../../../../hooks/useInput"
import { getCurrentUserInfo, signOut } from "../../../../firebase/auth"
import { createNewChat } from "../../../../firebase/messages"

const Profile = ({ onChatList }) => {
    const user = getCurrentUserInfo()

    const minChatNameLength = 3
    const maxChatNameLength = 20

    const [isNewChatMode, setIsNewChatMode] = useState(false)
    const chatName = useInput("", {
        isEmpty: false,
        minLength: minChatNameLength,
        maxLength: maxChatNameLength
    })
    const isValidInput = chatName.inputValid

    const onSave = e => {
        e.preventDefault()
        createNewChat(chatName.value)
        setIsNewChatMode(false)

        onChatList()
    }

    const onNewChat = () => {
        setIsNewChatMode(true)
    }

    return <div className={styles.profile}>
        <div>
            <Arrow onClick={onChatList} />
            <div className={styles.container}>
                <img src={user.photoURL} className={styles.avatar} alt="" />
                <div className={styles.info}>
                    <div className={styles.name} >{user.displayName}</div>
                    <div className={styles.email} > {user.email}</div>
                </div>
            </div>

            <div className={styles.wrapper}>
                {isNewChatMode
                    ? <form className={styles.form__wrapper}>
                        <input type="text"
                            placeholder="Enter a chat name"
                            className={styles.input}
                            onChange={chatName.onChange}
                            value={chatName.value}
                        />
                        <button className={`${styles.button} ${styles.newchat}`}
                            onClick={onSave}
                            disabled={!isValidInput}> Save</button>
                    </form>
                    : <button className={`${styles.button} ${styles.newchat}`} onClick={onNewChat}>+New Chat</button>}
                <button className={`${styles.button} ${styles.signout}`} onClick={signOut}>Sign out</button>
            </div>
        </div>
    </div >
}
export default Profile