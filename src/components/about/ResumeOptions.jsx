import { Download1, ExternalLink1 } from "icons-by-heynendo"
import PopoutWindow from "../PopoutWindow"
import '../../style/resume-options.css'

const resume = './resume_DonovanHeynen.pdf'

export default function ResumeOptions({ onClose }){
    return(
        <PopoutWindow
            title="Resume Options"
            onClose={onClose}
        >
            <div className="resume-options">
                <div className="main-options">
                    <a className="card-2 download"
                        href={resume}
                        download="Donovan_Heynen_Resume.pdf"
                    >
                        download
                        <Download1 size={15}/>
                    </a>
                    <button className="card-2 open"
                        onClick={() => window.open(resume, "_blank")}
                    >
                        view in a new page
                        <ExternalLink1 size={15}/>
                    </button>
                </div>
                <button className="close" onClick={onClose}>close</button>
            </div>
        </PopoutWindow>
    )
}