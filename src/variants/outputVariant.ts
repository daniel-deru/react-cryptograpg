import { Variants } from "framer-motion"


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

export const outputChildrenVariants: Variants = {
    animate: {
        opacity: 1,

    },
    initial: {
        opacity: 0
    }
}