import { useState } from "react"
import styles from "./Search.module.css"
const ChatsListSearch = ({ search }) => {
    const [timerId, setTimerId] = useState(null)

    const [searchValue, setSearchValue] = useState("")
    const onSearchChange = e => {
        e.preventDefault()
        if (timerId) {
            clearTimeout(timerId);
        }
        setSearchValue(e.target.value)
        setTimerId(setTimeout(()=>search(e.target.value), 500))
    }


    return <form >
        <input type="text"
            placeholder="search"
            className={styles.input}
            value={searchValue}
            onChange={onSearchChange}
        />
    </form>
}
export default ChatsListSearch