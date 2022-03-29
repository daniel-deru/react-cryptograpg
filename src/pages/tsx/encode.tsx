import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store'
import Header from '../../components/tsx/Header'
import { EncodePage } from '../styles/encode.styled'
import { Code } from '../../store/typesSlice'

const { ENCODE, DECODE } = Code

const Encode: React.FC = () => {
  const codeType = useAppSelector(state => state.type)
  const encryptionMethod = useAppSelector(state => state.encryption)

  useEffect(() => {
    console.log(encryptionMethod)
  }, [codeType, encryptionMethod])
  return (
    <EncodePage>
      <Header />
      <main>
        <div>
          <label htmlFor="">Enter Your Message</label>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <label htmlFor="">Enter Your Key</label>
          <input type="text" />
        </div>
      </main>
      <button>{codeType == ENCODE ? "Encode" : "Decode"}</button>
    </EncodePage> 
  )
}

export default Encode