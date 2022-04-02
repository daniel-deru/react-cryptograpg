import { useEffect, useRef, useState } from 'react'
import CryptoJS from 'crypto-js'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../store'
import Header from '../../components/tsx/Header'
import { EncodePage } from '../styles/encode.styled'
import { Code } from '../../store/typesSlice'

import { encode, decode } from '../../utils/convert'

import Copy from '../../components/tsx/Copy'

const { ENCODE, DECODE } = Code

type InputType = string | undefined
type EncryptionType = InputType

const Encode: React.FC = () => {
  const [output, setOuput] = useState<EncryptionType>("")
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const codeType = useAppSelector(state => state.type)
  const encryptionMethod = useAppSelector(state => state.encryption)

  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const keyRef = useRef<HTMLInputElement | null>(null)

  const encodeMessage = (): void => {
    let message: string = ""
    const key: InputType = keyRef.current?.value

    if(!messageRef?.current?.value) return setOuput("No Message Entered")

    message = messageRef.current.value
    
    let encryptedMessage: string = encode(message, encryptionMethod, key)
    return setOuput(encryptedMessage ? encryptedMessage : "Something Went Wrong")

  }

  const decodeMessage = (): void => {
    let message: string =""
    const key: InputType = keyRef.current?.value
    if(!messageRef.current?.value) return setOuput("No Message Entered")
    message = messageRef.current.value

    let decryptedMessage: string = decode(message, encryptionMethod, key)
    setOuput(decryptedMessage ? decryptedMessage : "Something Went Wrong")
  }

  const copy = (value: string | undefined) => {
    if(value) navigator.clipboard.writeText(value)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  useEffect(() => {
  }, [codeType, encryptionMethod])
  return (
    <EncodePage>
      <Copy show={isCopied} />
      <Header />
      <main>
        <div className='control-container'>
          <button type='button' onClick={() => copy(messageRef?.current?.value)}>Copy Message</button>
          <button onClick={() => codeType === ENCODE ? encodeMessage() : decodeMessage()}>
              {codeType == ENCODE ? "Encode" : "Decode"}
          </button>
          <button type='button' onClick={() => copy(keyRef?.current?.value)}>Copy Key</button>
        </div>

        <div className='input-container'>
          <div>
            <label htmlFor="">Enter Your Message</label>
            <textarea name="" id="" ref={messageRef}></textarea>
          </div>
          <div>
            <label htmlFor="">Enter Your Key</label>
            <input type="text" ref={keyRef}/>
          </div>
        </div>
      </main>
     
      <motion.section className='output'>
        {output && output.split("").map(char => (
          char
        ))}
      </motion.section>
    </EncodePage> 
  )
}

export default Encode