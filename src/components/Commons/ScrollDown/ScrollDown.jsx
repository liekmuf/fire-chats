import { useEffect, useState } from 'react'
import styles from "./ScrollDown.module.css"

const ScrollDown = ({ scroll }) => {
    const [isDown, setIsDown] = useState(true)
    const scrollClassName = `${styles.down} ${isDown ? styles.hiden : ''}`

    const onScroll = e => {
        const scrolHeight = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)
        if (scrolHeight < 15 || (window.innerHeight - e.target.documentElement.scrollHeight > 50)) setIsDown(true)
        else if (scrolHeight > 30) setIsDown(false)
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => document.body.removeEventListener('scroll', onScroll)
    }, [])

    return <div
        onClick={scroll}
        className={scrollClassName}>
        <div className={styles.arrow}></div>
    </div>
}
export default ScrollDown