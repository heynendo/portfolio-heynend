import HeroSection from "../components/HeroSection"
import BodySection from "../components/BodySection"
import LowerSection from "../components/LowerSection"
import ContactForm from "../components/ContactForm"
import EmailIcon from '../icons/EmailIcon'
import '../style/contact.css'
import { useState } from "react"
import EmailOptions from "../components/contact/EmailOptions"
import { AnimatePresence } from "motion/react"

export default function Contact(){

    const [showEmailOptions, setShowEmailOptions] = useState(false)

    return(
        <main className="contact">
            <HeroSection>
                <h1 className="bold">Let's build something <span>that lasts.</span></h1>
                <div className="cta">
                    <button 
                        onClick={() => setShowEmailOptions(true)}
                    >
                        email
                        <EmailIcon />
                    </button>
                    <span>Send an email or fill out the form below to get in touch.</span>
                </div>
                <AnimatePresence>
                    {showEmailOptions && <EmailOptions onClose={() => setShowEmailOptions(false)} />}
                </AnimatePresence>
            </HeroSection>
            <BodySection>
                <ContactForm />
            </BodySection>
            <LowerSection>
                
            </LowerSection>
        </main>
    )
}