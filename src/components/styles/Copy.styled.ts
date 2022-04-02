import styled from "styled-components"
import { motion } from "framer-motion"

export const CopyComponent = styled(motion.div)`
    background-color: black;
    color: ${({theme}) => theme.colors.green};
    border: 2px dashed ${({theme}) => theme.colors.green};
    padding: 1rem;
    width: 40vw;
    height: 10vh;
    font-size: 2em;
    border-radius: 10px;
    position: absolute;
    z-index: 1000;
    margin: auto;
    left: 50%;
    transform: translateX(-50%);

`