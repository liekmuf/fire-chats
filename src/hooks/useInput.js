import { useState } from "react"
import { useValidation } from "./useValidation"
export const useInput = (initialValue = "", validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = e => {
        setValue(e.target.value)
    }

    const onBlur = e => {
        setDirty(true)
    }
    return {
        value,
        ...valid,
        onChange,
        onBlur,
        isDirty
    }
}