import {useState} from 'react'
import ArrowIcon from '../components/icons/ArrowIcon'
import '../styles/contact.css'

export default function Contact(){
    const API_URL = import.meta.env.DEV
        ? "http://localhost:8787/" // localhost dev
        : "https://emailserver-resend.heynen-donovan.workers.dev/"

    const defaultFormData = {
        site: 'donovanheynen',
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    const [formData, setFormData] = useState(defaultFormData)
    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(null)

    function validateField(name, value){
        if (name === 'name' && !value.trim()) return 'Name is required.'
        if (name === 'email') {
            if (!value.trim()) return 'Email is required.'
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) return 'Email is invalid.'
        }
        if (name === 'message' && !value.trim()) return 'Message is required.'
        return ''
    }
    function validateForm() {
        const newErrors = {}
        for (const field of ['name', 'email', 'message']) {
        const error = validateField(field, formData[field])
        if (error) newErrors[field] = error
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleChange(e){
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
    function handleBlur(e) {
        const { name, value } = e.target
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }
    async function handleSubmit(e){
        e.preventDefault()

        if (!validateForm()) {
            setSubmit(null)
            return
        }
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted:", formData);
                alert("Message sent.")
                setFormData(defaultFormData);
                setSubmit(true);
            } else {
                console.error("Failed to send message:", await response.text());
                alert("Failed to send message")
                setSubmit(false);
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            alert("Error sending message")
            setSubmit(false);
        }
    }

    return(
        <div className="contact">
            <div className='container'>
                <h1>Questions? Contact Me</h1>
                <p>Looking to add a website to your growing business? Need a full-stack developer in your next project? Let me know how I can help you. Email me at <a href="mailto:heynen.donovan@gmail.com">heynen.donovan@gmail.com</a> or fill out the form below.</p>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input 
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='break' />
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='break' />
                    <div>
                        <label htmlFor='subject'>Subject</label>
                        <input 
                            id='subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='break' />
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea 
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='break' />
                    <div className='submit'>
                        <button type='submit'>Send <ArrowIcon color={"white"}/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}