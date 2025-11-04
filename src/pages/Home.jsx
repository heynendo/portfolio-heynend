import { Link, useNavigate } from 'react-router-dom'
import '../styles/home.css'
import ArrowIcon from '../components/icons/ArrowIcon'
import HandleNavigation from '../functions/HandleNavigation'

export default function Home(){

    const navigate = useNavigate()

    return(
        <div className="home">
            <div className='content'>
                <h2>Donovan Heynen</h2>
                <h1 className='title'>Freelance Web Developer</h1>
                <div className='main'>
                    <div>
                        add graphic with some highlights + hero text
                    </div>
                    <img className='headshot' src="/images/headshot.jpg" />
                </div>
                <div className='learn-more' 
                    onClick={() => {HandleNavigation(navigate, "about", "/about")}}
                >
                    learn more <ArrowIcon />
                </div>
            </div>
        </div>
    )
}