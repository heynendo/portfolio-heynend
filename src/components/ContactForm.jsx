import { useState } from "react"
import { AnimatePresence } from "motion/react"
import PopoutWindow from "./PopoutWindow"
import '../style/contact-form.css'

const validate = (values) => {
    const errors = {}
    if (!values.name || values.name.trim().length < 5)
        errors.name = "Name must be at least 5 characters."
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
        errors.email = "Invalid email address."
    if (!values.message || values.message.trim().length < 10)
        errors.message = "Message must be at least 10 characters."
    return errors
}

export default function ContactForm() {
    const [values, setValues] = useState({ name: "", email: "", message: "" })
    const [errors, setErrors] = useState({})
    const [popout, setPopout] = useState(null) // "error" | "success" | null

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validate(values)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setPopout("error")
            return
        }
        // TODO: send to Resend server
        setValues({ name: "", email: "", message: "" })
        setPopout("success")
    }

    const errorList = Object.values(errors).filter(Boolean)

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                />
                <button type="submit">send</button>
            </form>
            <AnimatePresence>
                {popout === "error" &&
                    <PopoutWindow
                        title="Review input errors"
                        onClose={() => setPopout(null)}
                        classname="contact-popout"
                    >
                        <ul>
                            {errorList.map((msg, i) => (
                                <li key={i}>{msg}</li>
                            ))}
                        </ul>
                        <button className="close" onClick={() => setPopout(null)}>close</button>
                    </PopoutWindow>
                }
                {popout === "success" &&
                    <PopoutWindow
                        title="Message sent"
                        onClose={() => setPopout(null)}
                        classname="contact-popout"
                    >
                        <p>Thanks for reaching out! I'll get back to you as soon as I can.</p>
                        <button className="close" onClick={() => setPopout(null)}>close</button>
                    </PopoutWindow>
                }
            </AnimatePresence>
        </>
    )
}