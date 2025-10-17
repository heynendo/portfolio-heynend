import {useState} from 'react'
import '../styles/contact.css'

export default function Contact(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
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
            //const response = await fetch("https://email.donovanheynen.com/", {
            const response = await fetch("https://email-sender.heynen-donovan.workers.dev/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted:", formData);
                alert("Message sent.")
                setFormData({ name: "", email: "", subject: "", message: "" });
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

        /*if (validateForm()){
            fetch('https://formsubmit.co/heynen.donovan@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            })
            .then(response => {
                if (response.ok) {
                    console.log('Form submitted:', formData)
                    setFormData({ name: '', email: '', subject: '', message: '' })
                    setSubmit(true)
                } else {
                    setSubmit(false)
                }
            })


            console.log('Form submitted:', formData)
            setFormData({ name: '', email: '', subject: '', message: '' })
        } else { setSubmit(null)}*/
    }

    return(
        <div className="contact">
            <h1>Get in Touch</h1>
            <div className="main-card">
                <p>Email me at <a href="mailto:heynen.donovan@gmail.com">heynen.donovan@gmail.com</a>, or send a message below.</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input 
                            placeholder='Name'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.name && <p className='error'>{errors.name}</p>}
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            placeholder='Email'
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && <p className='error'>{errors.email}</p>}
                    <div>
                        <label htmlFor='subject'>Subject</label>
                        <input 
                            placeholder='Subject'
                            id='subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea 
                            placeholder='Message'
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.message && <p className='error'>{errors.message}</p>}
                    <div>
                        <div></div>
                        <button type='submit'>Send</button>
                    </div>
                    {/*submit && <p className='submit-msg'>Message sent.</p>*/}
                    {/*submit === false ? <p className='submit-error'>Failed to send.</p>: ''*/}
                </form>
            </div>
        </div>
    )
}