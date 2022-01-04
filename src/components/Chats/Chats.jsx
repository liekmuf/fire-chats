import { useState } from "react"
import ChatRoom from "./Chatroom/Chatroom"
import Sidebar from "./Sidebar/Sidebar"
import { useContext } from "react/cjs/react.development"
import { DeviceContext } from "../../context/DeviceContext"

const Chats = () => {

    const [currentChat, setCurrentChat] = useState({})
    const isMobile = useContext(DeviceContext)
    const [isSidebarHiden, setSidebarHiden] = useState(false)

    const hideSidebar = () => {
        isMobile && setSidebarHiden(true)
    }
    const showSidebar = () => { 
        isMobile && setSidebarHiden(false) }

    return <div style={{display: "flex"}}>
        <Sidebar
            setCurrentChat={setCurrentChat}
            currentChat={currentChat}
            isSidebarHiden={isSidebarHiden}
            hideSidebar={hideSidebar}
        />
        <ChatRoom 
            currentChat={currentChat}
            isSidebarHiden={isSidebarHiden}
            showSidebar={showSidebar}/>

    </div>
}
export default Chats