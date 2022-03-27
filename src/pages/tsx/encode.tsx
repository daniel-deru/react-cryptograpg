import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store'

const Encode: React.FC = () => {
  const codeType = useAppSelector(state => state.type)
  const encryptionMethod = useAppSelector(state => state.encryption)

  useEffect(() => {
    console.log(encryptionMethod)
  }, [codeType, encryptionMethod])
  return (
    <div>: React.FC</div>
  )
}

export default Encode