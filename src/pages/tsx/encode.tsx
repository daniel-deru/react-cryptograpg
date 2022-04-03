import { useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../store'
import { Code } from '../../store/typesSlice'

import Header from '../../components/tsx/Header'
import Output from '../../components/tsx/Output'
import Copy from '../../components/tsx/Copy'

import { EncodePage } from '../styles/encode.styled'

import { encode, decode } from '../../utils/convert'

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
    setOuput("")
    let message: string = ""
    const key: InputType = keyRef.current?.value

    if(!messageRef?.current?.value) return setOuput("No Message Entered")

    message = messageRef.current.value
    
    let encryptedMessage: string = encode(message, encryptionMethod, key)
    return setOuput(encryptedMessage ? encryptedMessage : "Something Went Wrong")

  }

  const decodeMessage = (): void => {
    setOuput("")
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
        <section className='control-container'>
          <button type='button' onClick={() => copy(output)}>Copy Message</button>
          <button onClick={() => codeType === ENCODE ? encodeMessage() : decodeMessage()}>
              {codeType == ENCODE ? "Encode" : "Decode"}
          </button>
          <button type='button' onClick={() => copy(output)}>Copy Key</button>
        </section>

        <section className='input-container'>
          <div>
            <label htmlFor="">Your Secret Key (Optional)</label>
            <input type="text" ref={keyRef} />
          </div>
          <div>
            <label htmlFor="">Your Message</label>
            <textarea name="" id="" ref={messageRef}></textarea>
          </div>
        </section>

        <section>
            
        </section>
      </main>
     

    </EncodePage> 
  )
}

export default Encode