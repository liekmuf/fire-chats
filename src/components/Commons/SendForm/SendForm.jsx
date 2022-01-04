import sendIcon from '../../../images/sendicon.svg'
import { useState } from 'react'
import styles from "./SendForm.module.css"

const SendForm = ({ send }) => {
    const [formValue, setFormValue] = useState('')
    const sendHandle = e => {
        e.preventDefault()

        if (formValue.length > 0) {
            send(formValue)
            setFormValue('')
        }
    }
    return <form onSubmit={sendHandle} className={styles.form}>
        <input className={styles.input}
            value={formValue}
            placeholder="Write a message..."
            onChange={e => setFormValue(e.target.value)} />
        <img src={sendIcon}
            className={styles.ico}
            onClick={sendHandle}
            alt="" />
    </form>
}
export default SendForm