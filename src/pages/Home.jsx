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
                <h1 className='title'>Web Developer & Software Engineer</h1>
                <div className='main'>
                    <img className='headshot' src="/images/headshot.jpg" />
                    <div>
                        <p>
                            Hi, I'm Donovan. 
                        </p>
                        <p>
                            I create responsive, modern websites for businesses that want more than a template. Balancing technical expertise and creative thinking, I deliver solutions that look great and perform even better.
                        </p>
                        <div className='learn-more' onClick={() =>{
                            HandleNavigation(navigate, "about", "/about")
                        }}>
                            learn more 
                            <ArrowIcon color='black'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}