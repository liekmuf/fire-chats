import { useState } from "react"
import styles from "./Auth.module.css"
import { useInput } from "../../hooks/useInput"
import { signWithGoogle, login } from "../../firebase/auth.js"

const SignIn = ({ createAccount }) => {
    const email = useInput("", { isEmpty: false, email: false })
    const password = useInput("", { isEmpty: false, minLength: 6 })
    const [errorMessage, setErrorMessage] = useState("")

    const inputsValid = email.inputValid && password.inputValid

    const onSubmit = e => {
        e.preventDefault()

        login(email.value, password.value)
            .catch(error => {
                setErrorMessage(error.message)
            });
    }

    return <div className={styles.auth}>
        <div className={styles.title}>
            <h1>Sign In</h1>
        </div>

        <div className={styles.card}>
            <form className={styles.form}>
                <div>Email address</div>
                <input
                    name="email"
                    onChange={email.onChange}
                    className={styles.input}
                    onBlur={email.onBlur}
                    value={email.value} />
                <div className={styles.error}>
                    {email.isDirty && email.errorMessage}
                </div>

                <div>Password</div>
                <input type="password"
                    autoComplete="on"
                    className={styles.input}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    value={password.value} />
                <div className={styles.error}>
                    {password.isDirty && password.errorMessage}
                </div>

                <div className={styles.caption}>
                    <span className={styles.link} onClick={createAccount}>Create Account</span>
                </div>

                <button className={styles.button}
                    disabled={!inputsValid}
                    onClick={onSubmit}>Sign in</button>
                <div className={styles.error}>
                    {errorMessage}
                </div>
            </form>

            <button className={styles.button}
                onClick={signWithGoogle}>Continue with Google</button>
        </div>
    </div>
}
export default SignIn