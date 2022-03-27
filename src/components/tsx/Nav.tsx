import { useEffect, useState } from "react"
import { NavComponent } from "../styles/Nav.styled"
import { Encryptions } from "../../store/encryptionSlice"

import { useAppDispatch, useAppSelector } from "../../store/index"
import { setEncryption } from "../../store/encryptionSlice"

type EncryptionMethod = [string, string | Encryptions]
const { BINARY, OCTAL, DECIMAL, HEX, MORSE, ROMAN } = Encryptions

const Nav: React.FC = () => {
    const [methods, setMethods] = useState<EncryptionMethod[]>([])

    // const encryptionType = 
    const dispatch = useAppDispatch()

    const getMethods = (): void => {
        const values: EncryptionMethod[] = Object.entries(Encryptions)
        setMethods(values.slice(0, Math.floor(values.length/2)))
    }

    const setEncryptionMethod = (method: Encryptions): void => {
        dispatch(setEncryption(method))
    }

    useEffect(() => {
        getMethods()
    }, [])

    return (
        <NavComponent>
            <div>Method</div>
            <ul>
                {methods.map((method) => (
                    <li key={method[0]} onClick={() => setEncryptionMethod(parseInt(method[0]))}>{method[1]}</li>
                ))}
            </ul>
        </NavComponent>
    )
}

export default Nav