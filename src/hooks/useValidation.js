import { useState, useEffect } from "react"

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [inputValid, setInputValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    setEmpty(!value)
                    break
                case "minLength":
                    setMinLengthError(value.length < validations[validation])
                    break
                case "maxLength":
                    setMaxLengthError(value.length > validations[validation])
                    break
                case "email":
                    const re = /\S+@\S+\.\S+/
                    setEmailError(!re.test(value))
                    break
                default:
                    break
            }
        }
    }, [value, validations])
    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || emailError) {
            minLengthError && setErrorMessage("The field is too short")
            emailError && setErrorMessage("Email is invalid")
            isEmpty && setErrorMessage("input is empty")
            setInputValid(false)
        } else {
            setErrorMessage("")
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError])
    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        errorMessage,
        inputValid
    }
}