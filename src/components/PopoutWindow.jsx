import '../style/popout-window.css'
import { motion } from "motion/react"
import usePreventScroll from "../functions/usePreventScroll"

export default function PopoutWindow({title, onClose, classname, children}){
    
    usePreventScroll(true)

    return(
        <div className={`popout ${classname}`}>
            <motion.div className="blur" onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
                transition={{ duration: 0.3 }}
            />
            <motion.div className="window"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <h2 className="title">{title}</h2>
                {children}
            </motion.div>
        </div>
    )
}