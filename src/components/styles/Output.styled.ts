import styled from "styled-components"
import { motion } from "framer-motion"

export const OutputComponent = styled(motion.div)`
    color: ${({theme}) => theme.colors.green};
    margin: auto;
    font-size: 0.5em;
    width: 100%;
`