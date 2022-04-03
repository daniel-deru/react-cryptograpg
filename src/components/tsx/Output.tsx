import { OutputComponent } from "../styles/Output.styled"
import {Variants, motion} from "framer-motion"
// import {outputContainerVariant} from "../../variants/outputVariant"

interface Props {
    output: string
}

export const outputContainerVariant: Variants = {
    initial: {
        opacity: 1,
        top: 50
    },
    animate: {
        transition: {
            duration: 0.5
        },
        top: 0,
        opacity: 1,
    }
}

const Output: React.FC<Props> = ({ output }) => {
  return (
    <OutputComponent
        variants={outputContainerVariant}
        initial="initial"
        animate="animate"
    >
        {output &&
            <motion.div>
                {output}
            </motion.div>
        }
       
    </OutputComponent>
  )
}

export default Output