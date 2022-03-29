import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store'
import Header from '../../components/tsx/Header'

const Encode: React.FC = () => {
  const codeType = useAppSelector(state => state.type)
  const encryptionMethod = useAppSelector(state => state.encryption)

  useEffect(() => {
    console.log(encryptionMethod)
  }, [codeType, encryptionMethod])
  return (
    <div>
      <Header />
    </div> 
  )
}

export default Encode