import Arrow from "../../../Commons/Arrow/Arrow"
import styles from "./ChatroomHeader.module.css"

const Header = ({ chatName, showSidebar, isMobile }) => {

    return <header className={styles.header}>
        {isMobile && <Arrow onClick={showSidebar} />}
        <h1 className={styles.header__logo}>
            {chatName}
        </h1>

    </header>
}
export default Header