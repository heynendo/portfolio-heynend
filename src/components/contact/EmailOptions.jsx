import { Copy2 } from "icons-by-heynendo"
import PopoutWindow from "../PopoutWindow"
import '../../style/email-options.css'
import { useState } from "react"
import { getWindowWidth } from "../../functions/GetWindowWidth"

const email = "heynen.donovan@gmail.com"

const emailClients = [
    { label: "Gmail", url: `https://mail.google.com/mail/?view=cm&to=${email}` },
    { label: "Outlook", url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}` },
    { label: "Apple Mail", url: `mailto:${email}` },
    { label: "Yahoo", url: `https://compose.mail.yahoo.com/?to=${email}` },
]

export default function EmailOptions({ onClose }){

    const [copied, setCopied] = useState(false)

    const width = getWindowWidth()

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
    }


    return(
        <PopoutWindow
            title="Email Options"
            onClose={onClose}
        >
            <div className="email-options">
                <span>easily copy my email address below</span>
                <div className={`card-2 ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                    heynen.donovan@gmail.com
                    {copied && width > 385 && <span className="copied-toast">copied</span>}
                    <Copy2 
                        color="#262629"
                        size={15}
                        className='copy'
                    />
                </div>
                <span>or start a message from your email</span>
                <div className="email-choices">
                    {emailClients.map(({ label, url }) => (
                        <a key={label} href={url} target="_blank" rel="noreferrer" className="card-2">
                            {label}
                        </a>
                    ))}
                </div>
                <button className="close" onClick={onClose}>close</button>
            </div>
        </PopoutWindow>
    )
}