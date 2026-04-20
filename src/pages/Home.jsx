import '../style/home.css'
import ServiceList from '../components/ServiceList'
import HeroSection from '../components/HeroSection'
import BodySection from '../components/BodySection'
import LowerSection from '../components/LowerSection'
import DHLogo from '../icons/DHLogo'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../functions/ScrollToTop'

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
                        I build dependable, production-ready web applications from the ground up, working with clients through every stage of the process — from initial design to final deployment — making sure nothing gets lost along the way. I care about the details: clean code, thoughtful UI, and sites that hold up over time.
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