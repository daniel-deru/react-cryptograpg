import { useState, useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../store"

import { Code } from "../../store/typesSlice"
import { setCodeType } from "../../store/typesSlice"
import { ToggleComponent } from "../styles/Toggle.styled"

const { ENCODE, DECODE } = Code

const Toggle: React.FC = () => {
    const codeType = useAppSelector(state => state.type)
    const [code, setCode] = useState<Code>(codeType)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCodeType(code))
    }, [code])
    return (
        <ToggleComponent>
            <span onClick={() => setCode(ENCODE)} className={`${code == ENCODE && "selected"}`}>Encode</span>
            <span onClick={() => setCode(DECODE)} className={`${code == DECODE && "selected"}`}>Decode</span>
        </ToggleComponent>
    )
}

export default Toggle