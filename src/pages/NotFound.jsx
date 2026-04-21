import { useNavigate } from "react-router-dom"
import PopoutWindow from "../components/PopoutWindow"


export default function NotFound(){

    const navigate = useNavigate()

    return(
        <main className="not-found">
            <PopoutWindow
                title="404: Page Not Found"
                classname="not-found"
                onClose={() => navigate('/')}
            >
                <p>The requested page could not be found. Please check the URL or return to the homepage.</p>
                <button className="close" onClick={() => navigate('/')}>back to home</button>
            </PopoutWindow>
        </main>
    )
}