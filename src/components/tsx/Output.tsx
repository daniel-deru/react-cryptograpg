import { useEffect } from "react"
import { OutputComponent } from "../styles/Output.styled"
import {Variants, motion} from "framer-motion"
import { AnimatePresence } from "framer-motion"
// import {outputContainerVariant} from "../../variants/outputVariant"

interface Props {
    output: string
}

export const outputContainerVariant: Variants = {
    initial: {
        top: 50
    },
    animate: {
        top: 0,
    }
}

const Output: React.FC<Props> = ({ output }) => {

    useEffect(() => {
        console.log("The output component has been mounted")
    }, [output])
    return (
        <AnimatePresence>
            <OutputComponent

            >
                {output &&
                    <motion.div
                        key="output"
                        variants={outputContainerVariant}
                        initial="initial"
                        animate="animate"
                    >
                        {output}
                    </motion.div>
                }
            
            </OutputComponent>
        </AnimatePresence>
    )
}

export default Output