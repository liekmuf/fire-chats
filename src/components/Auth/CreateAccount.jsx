import { useState } from "react"
import { useInput } from "../../hooks/useInput"
import styles from "./Auth.module.css"
import { signWithGoogle, register } from "../../firebase/auth"



const CreateAccount = ({ signIn }) => {
    const minUsernameLegtth = 3
    const minPasswordLength = 6
    const [errorMessage, setErrorMessage] = useState("")
    const username = useInput("", { isEmpty: false, minLength: minUsernameLegtth })
    const email = useInput("", { isEmpty: false, email: false })
    const password = useInput("", { isEmpty: false, minLength: minPasswordLength })
    const confirmedPassword = useInput("", { isEmpty: false, minLength: minPasswordLength })

    const isPasswordsMismatch = password.value !== confirmedPassword.value

    const inputsValid = username.inputValid &&
        email.inputValid &&
        password.inputValid &&
        confirmedPassword.inputValid &&
        !isPasswordsMismatch

    const onSubmit = async e => {
        e.preventDefault()
        register(email.value, password.value, username.value).catch(error => {
            setErrorMessage(error.message)
        });

    }

    return <div className={styles.auth}>
        <div className={styles.title}><h1>Create account</h1></div>
        <div className={styles.card}>

            <form className={styles.form}>
                <div>Username</div>
                <input type="text"
                    className={styles.input}
                    onChange={username.onChange}
                    onBlur={username.onBlur}
                    value={username.value} />
                <div className={styles.error}>
                    {username.isDirty && username.errorMessage}
                </div>

                <div>Email address</div>
                <input type="email"
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
                    autoComplete="off"
                    className={styles.input}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    value={password.value} />
                <div className={styles.error}>
                    {password.isDirty && password.errorMessage}
                </div>

                <div>Confirm password</div>
                <input type="password"
                    autoComplete="off"
                    className={styles.input}
                    onChange={confirmedPassword.onChange}
                    onBlur={confirmedPassword.onBlur}
                    value={confirmedPassword.value} />
                <div className={styles.error}>
                    {confirmedPassword.isDirty && isPasswordsMismatch && "Password mismatch"}
                </div>
                <div className={styles.caption}>Already registered <span className={styles.link}
                    onClick={signIn}>Sign in</span></div>

                <button className={styles.button}
                    disabled={!inputsValid}
                    onClick={onSubmit}>Create account</button>
                <div className={styles.error}>{errorMessage}</div>

            </form>
            <button className={styles.button}
                onClick={signWithGoogle}>Continue with Google</button>
        </div>
    </div>
}
export default CreateAccount