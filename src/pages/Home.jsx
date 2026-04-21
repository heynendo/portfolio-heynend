import '../style/home.css'
import ServiceList from '../components/ServiceList'
import HeroSection from '../components/HeroSection'
import BodySection from '../components/BodySection'
import LowerSection from '../components/LowerSection'
import DHLogo from '../icons/DHLogo'
import { useNavigate } from 'react-router-dom'

export default function Home(){

    const navigate = useNavigate()

    return(
        <main className="home">
            <HeroSection direction='right'>
                <h1 className="bold">Web Design and Development <span>that works for you.</span></h1>
                <div className='cta-buttons'>
                    <button className='lg' onClick={() => navigate('/portfolio')}>Portfolio</button>
                    <button className='lg contact' onClick={() => navigate('/contact')}>Contact</button>
                </div>
            </HeroSection>
            <BodySection direction="right">
                <div className='intro'>
                    <DHLogo className="logo" />
                    <div className='break'/>
                    <p className='bold'>
                        I design and build websites that are clean, fast, and built to last. I work closely with every client from the first conversation to launch day, making sure the final product is something they're proud to put their name on. Looking to launch something new, improve what you have, or bring someone onto your team? Reach out and let's get started.
                    </p>
                </div>
                <div className='services'>
                    <h2 className='gradient'>Services</h2>
                    <ServiceList />
                </div>
            </BodySection>
            <LowerSection direction='right'>

            </LowerSection>
        </main>
    )
}