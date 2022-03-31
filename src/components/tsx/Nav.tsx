import { useEffect, useState } from "react"
import { NavComponent } from "../styles/Nav.styled"
import { motion } from "framer-motion"
import { Encryptions } from "../../store/encryptionSlice"

import { useAppDispatch, useAppSelector } from "../../store/index"
import { setEncryption } from "../../store/encryptionSlice"

type EncryptionMethod = [string, string | Encryptions]

const Nav: React.FC = () => {
    const [methods, setMethods] = useState<EncryptionMethod[]>([])
    const [showNav, setShowNav] = useState<boolean>(false)

    const encryptionType = useAppSelector(state => state.encryption)
    const dispatch = useAppDispatch()

    const getMethods = (): void => {
        const values: EncryptionMethod[] = Object.entries(Encryptions)
        // console.log(values.slice(Math.floor(values.length/2)), values.length)
        setMethods(values.slice(Math.floor(values.length/2)))
    }

    const setEncryptionMethod = (method: Encryptions): void => {
        setShowNav(false)
        // console.log(method)
        dispatch(setEncryption(method))
    }

    useEffect(() => {
        getMethods()
        // console.log(methods)
        // console.log(typeof encryptionType)
    }, [])

    return (
        <NavComponent show={`${showNav ? "block" : "none"}`}>
            <div onClick={() => setShowNav(!showNav)}>
                {methods.length > 0 && methods[encryptionType][0]}
            </div>
            
            <motion.ul>
                {methods.map((method) => (
                    <li 
                        key={method[0]}
                        className={`${encryptionType == method[1] ? "selected" : ""}`} 
                        onClick={() => setEncryptionMethod(method[1] as Encryptions)}>{method[0]}
                    </li>
                ))}
            </motion.ul>
        </NavComponent>
    )
}

export default Nav