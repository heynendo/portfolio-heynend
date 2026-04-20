import { useState } from "react"
import '../style/service-list.css'
import PlusIcon from "../icons/PlusIcon"
import serviceData from '../data/service-data.json'
import { Exit2 } from "icons-by-heynendo"
import { AnimatePresence, motion } from "motion/react"

export default function ServiceList(){

    const [serviceSelected, setServiceSelected] = useState(null)

    return(
        <div className='service-list'>
            <AnimatePresence>
            {serviceSelected &&
            <motion.div 
                className='selected-card'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.75 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={serviceSelected?.id}
                        className="container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    >
                        <div className="head">
                            <h3>{serviceSelected?.title}</h3>
                            <Exit2 size={15} onClick={() => setServiceSelected(null)} color="#262629"/>
                        </div>
                        <p>{serviceSelected?.desc}</p>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            }
            </AnimatePresence>
            <div className={`options ${serviceSelected ? "pushed" : ""}`}
                animate={{ x: serviceSelected ? 725 : 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
                {serviceData.map((service) => (
                    <span
                        key={service.id}
                        className={`card ${serviceSelected?.id === service.id ? "active" : ""}`}
                        onClick={() => setServiceSelected(service)}
                    >
                        <h3>{service.title}</h3>
                        <PlusIcon />
                    </span>
                ))}
            </div>
        </div>
    )
}