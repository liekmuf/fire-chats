import CreateAccount from "./CreateAccount"
import SignIn from "./SignIn"
import { useState, useContext } from "react"
import { DeviceContext } from "../../context/DeviceContext"

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(false)

    const createAccount = () => setIsSignIn(false)
    const signIn = () => setIsSignIn(true)

    return <>
        {isSignIn ? <SignIn createAccount={createAccount}

        /> :
            <CreateAccount
                signIn={signIn} />}
    </>
}
export default Auth