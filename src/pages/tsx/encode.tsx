import { useEffect, useRef } from 'react'
import CryptoJS from 'crypto-js'
import { useAppDispatch, useAppSelector } from '../../store'
import Header from '../../components/tsx/Header'
import { EncodePage } from '../styles/encode.styled'
import { Code } from '../../store/typesSlice'

const { ENCODE, DECODE } = Code

const Encode: React.FC = () => {
  const codeType = useAppSelector(state => state.type)
  const encryptionMethod = useAppSelector(state => state.encryption)

  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const keyRef = useRef<HTMLInputElement | null>(null)

  const getMessage = (): void => {
    const message: string | undefined = messageRef.current?.value
    const key: string | undefined = keyRef.current?.value

    let encryptedMessage: CryptoJS.lib.CipherParams | string

    if(key && message) {
      encryptedMessage = CryptoJS.DES.encrypt(message, key).toString()
      console.log("This is the encrypted message: ", encryptedMessage)
      console.log("This is the decrypted message: ", CryptoJS.DES.decrypt(encryptedMessage, key).toString())
    } else {
      console.log(message)
    }

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
        <button onClick={() => getMessage()}>{codeType == ENCODE ? "Encode" : "Decode"}</button>
      </main>
     
      <section>
        
      </section>
    </EncodePage> 
  )
}

export default Encode