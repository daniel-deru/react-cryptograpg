import { AnimatePresence } from "framer-motion"
import { CopyComponent } from "../styles/Copy.styled"

const copyVariant = {
    initial: {
        top: -100,
    },
    animate: {
        top: 20,
    },
}

interface Props {
    show: boolean
}

const Copy: React.FC<Props> = ({ show }) => {
  return (
    <AnimatePresence>
        {show &&
        <CopyComponent
            key="modal"
            variants={copyVariant}
            animate="animate"
            initial="initial"
            exit="initial"
        >
            Copied
        </CopyComponent>
        }
    </AnimatePresence>
  )
}

export default Copy