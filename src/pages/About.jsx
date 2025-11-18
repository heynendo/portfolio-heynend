import {useState, useEffect} from 'react'
import '../styles/about.css'
import AboutNav from '../components/AboutNav'
import skills from '../data/skills.json'
import certificates from '../data/certificates.json'
import { AnimatePresence, motion } from 'motion/react'

export default function About(){

    const [pageWidth, setPageWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    const [navContent, setNavContent] = useState("Education")

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
                {pageWidth > 750 ? <img className='aside-img' src="/images/aboutMe-img.png"/> : ''}
                <div className='body'>
                    <h1>About Me</h1>
                    <p>
                        Before becoming a web development, I spent years as a software engineer at Stellantis — building systems where precision and reliability weren't optional. That work, combined with my Computer Science degree, taught me how to approach problems systematically and never compromise on quality.
                    </p>
                    <p>
                        Today, I use that background to help independent and small businesses succeed online. I handle everything from design and development to hosting and ongoing support. My focus is on creating sites that are not just beautiful, but built to perform and grow with your business.
                    </p>
                    <AboutNav 
                        navContent={navContent} 
                        setNavContent={setNavContent}
                    />
                    <AnimatePresence mode="wait">
                    {navContent === "Skills" ? 
                    <motion.div className='skills'
                        key="skills"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
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
                    </motion.div>
                    :
                    <motion.div className='education'
                        key="education"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <h3>B.S. in Computer Science at Grand Valley State University (2022)</h3>
                        <span>Minors in Computer Engineering & Mathematics</span>
                        <h3>Certifications</h3>
                        <div className='certifications'>
                            {certs}
                        </div>
                    </motion.div>
                    }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}