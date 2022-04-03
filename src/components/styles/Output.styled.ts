import styled from "styled-components"
import { motion } from "framer-motion"

export const OutputComponent = styled(motion.div)`
    color: ${({theme}) => theme.colors.green};
    margin: auto;
    margin-top: 1rem;
    font-size: 1em;
    width: 100%;
`