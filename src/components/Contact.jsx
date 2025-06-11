import '../styles/contact.css'

export default function Contact(){

    function handleSubmit(e){
        e.preventDefault()

    }

    return(
        <div className="contact">
            <h1>Get in Touch</h1>
            <div className="main-card">
                <form onSubmit={handleSubmit} method="post">
                    <div>
                        <label>Name</label>
                        <input 
                            placeholder='Name'
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            placeholder='Email'
                            type='email'
                            required
                        />
                    </div>
                    <div>
                        <label>Subject</label>
                        <input 
                            placeholder='Subject'
                            
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea 
                            placeholder='Message'
                            required
                        />
                    </div>
                    <div>
                        <div></div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}