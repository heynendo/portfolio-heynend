import '../style/sections.css'
import { motion } from 'motion/react'

export default function HeroSection({ direction = "left", children }) {
  return (
    <motion.div
      className={`hero ${direction}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5, delay: 1 }}}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 }}}
        exit={{ opacity: 0, transition: { duration: 0.25} }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}