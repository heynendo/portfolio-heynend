import '../style/sections.css'
import { motion } from 'motion/react'

export default function BodySection({direction="left", children}){

    const fromLeft = direction === "left"

    return (
        <motion.div
            className={`body ${direction}`}
            initial={{ x: fromLeft ? '-150vw' : '150vw', opacity: 1 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
            exit={{ x: fromLeft ? '-150vw' : '150vw', opacity: 1, transition: { duration: 0.75, ease: "easeIn" } }}
        >
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.25, delay: 1 } }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}