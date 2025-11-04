import {useState, useEffect} from 'react'
import '../styles/about.css'
import AboutNav from '../components/AboutNav'
import skills from '../data/skills.json'
import certificates from '../data/certificates.json'

export default function About(){

    const [pageWidth, setPageWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    const [navContent, setNavContent] = useState("Skills")

    const frontendSkillCards = skills.frontend.map(skill => (
        <div className='skill-card' key={skill.name}>
            <img src={skill.logo} />
            <h4>{skill.name}</h4>
        </div>
    ))
    const backendSkillCards = skills.backend.map(skill => (
        <div className='skill-card' key={skill.name}>
            <img src={skill.logo} />
            <h4>{skill.name}</h4>
        </div>
    ))
    const moreSKillCards = skills.other.map(skill => (
        <div className='skill-card' key={skill.name}>
            <img src={skill.logo} />
            <h4>{skill.name}</h4>
        </div>
    ))
    const certs = certificates.map(cert => (
        <div className='cert-card' key={cert.name}>
            <img src={cert.img} />
            <h4>{cert.name}</h4>
        </div>
    ))
    
    return(
        <div className="about">
            <div className='content'>
                {pageWidth > 750 ? <img className='headshot' src="/images/headshot.jpg"/> : ''}
                <div className='body'>
                    <h1>About Me</h1>
                    <p>I'm Donovan Heynen, a full-stack web developer specializing in creating modern, mobile-responsive websites that help small and medium businesses establish and grow their online presence. Whether you need a professional site to showcase your services, an interactive platform to engage customers, or a custom solution built for your specific needs, I deliver reliable results that make it easy for people to find you and connect with your business.</p>
                    <p>I handle the complete development process—from website design, domain setup and deployment, search engine optimization, and ongoing support—giving you a single partner for everything.</p>
                    <AboutNav 
                        navContent={navContent} 
                        setNavContent={setNavContent}
                    />
                    {navContent === "Skills" ? 
                    <div className='skills'>
                        <h3>Frontend</h3>
                        <div className='skill-cards'>
                            {frontendSkillCards}
                        </div>
                        <h3>Backend & Hosting</h3>
                        <div className='skill-cards'>
                            {backendSkillCards}
                        </div>
                        <h3>More</h3>
                        <div className='skill-cards'>
                            {moreSKillCards}
                        </div>
                    </div>
                    :
                    <div className='education'>
                        <h3>B.S. in Computer Science at Grand Valley State University (2022)</h3>
                        <span>Minors in Computer Engineering & Mathematics</span>
                        <h3>Certifications</h3>
                        <div className='certifications'>
                            {certs}
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}