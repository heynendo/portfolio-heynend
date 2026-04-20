import '../style/sections.css'
import { motion } from 'motion/react'

export default function LowerSection({direction="left", children}){
    return (
    <motion.div
      className={`lower ${direction}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, delay: 0.75 }}}
      exit={{ opacity: 0, transition: { duration: 0.25} }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.25, delay: 0 } }}
        transition={{ duration: 0.5, delay: 1.25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}