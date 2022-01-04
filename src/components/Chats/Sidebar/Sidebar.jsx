import { useState, useContext } from "react/cjs/react.development"
import { DeviceContext } from "../../../context/DeviceContext"
import ChatsList from "./ChatsList/ChatsList"
import Profile from "./Profile/Profile"
import styles from "./Sidebar.module.css"

const Sidebar = (props) => {
    const { currentChat, setCurrentChat, isSidebarHiden, hideSidebar } = props
    const [isProfile, setIsprofile] = useState(false)

    const onProfile = () => setIsprofile(true)
    const onChatList = () => setIsprofile(false)

    const isMobile = useContext(DeviceContext)
    
    const className = `${styles.sidebar} ${isMobile ? styles.mobile : ""} ${isSidebarHiden ? styles.hiden : ""}`

    return <div className={className}>
        <div className={styles.wrapper}>
            {isProfile ?
                <Profile onChatList={onChatList}
                    setCurrentChat={setCurrentChat} /> :
                <ChatsList
                    onProfile={onProfile}
                    hideSidebar={hideSidebar}
                    setCurrentChat={setCurrentChat}
                    currentChat={currentChat} />}
        </div>
    </div>
}
export default Sidebar