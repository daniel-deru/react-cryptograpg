import { useEffect, useRef, useState } from 'react'
import CryptoJS from 'crypto-js'
import { useAppDispatch, useAppSelector } from '../../store'
import Header from '../../components/tsx/Header'
import { EncodePage } from '../styles/encode.styled'
import { Code } from '../../store/typesSlice'

const { ENCODE, DECODE } = Code

type InputType = string | undefined
type EncryptionType = InputType | CryptoJS.lib.CipherParams

const Encode: React.FC = () => {
  const [output, setOuput] = useState<EncryptionType>("")

  const codeType = useAppSelector(state => state.type)
  const encryptionMethod = useAppSelector(state => state.encryption)

  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const keyRef = useRef<HTMLInputElement | null>(null)

  const encodeMessage = (): void => {
    const message: InputType = messageRef.current?.value
    const key: InputType = keyRef.current?.value

    let encryptedMessage: EncryptionType = message
    if(key && message) encryptedMessage = CryptoJS.AES.encrypt(message, key).toString()
    setOuput(encryptedMessage)

  }

  const decodeMessage = () => {

  }

  useEffect(() => {
    console.log(encryptionMethod)
  }, [codeType, encryptionMethod])
  return (
    <EncodePage>
      <Header />
      <main>
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
        <button onClick={() => codeType === ENCODE ? encodeMessage() : decodeMessage()}>
          {codeType == ENCODE ? "Encode" : "Decode"}
        </button>
      </main>
     
      <section>
        {output}
      </section>
    </EncodePage> 
  )
}

export default Encode