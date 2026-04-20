import HeroSection from "../components/HeroSection"
import BodySection from "../components/BodySection"
import LowerSection from "../components/LowerSection"
import '../style/about.css'
import LinkedinIcon from '../icons/LinkedinIcon'
import ResumeIcon from "../icons/ResumeIcon"
import { useState } from "react"
import Education from "../components/about/Education"
import Skills from "../components/about/Skills"
import Experience from "../components/about/Experience"
import { AnimatePresence, motion } from 'motion/react'
import ResumeOptions from "../components/about/ResumeOptions"

export default function About(){

    const [section, setSection] = useState("Education")
    const [showResumeOptions, setShowResumeOptions] = useState(false)

    return(
        <main className="about">
            <HeroSection>
                <h1 className="bold">About Me.</h1>
                <div className="content">
                    <div className="headshot"></div>
                    <div className="container">
                        <span>I'm a web developer and software engineer with a passion for building things that work as good as they look. Based outside of Chicago, I work with businesses and teams who need clean, reliable web applications built with care. I bring a strong technical foundation, an eye for design, and the ability to take a project from concept to launch.</span>
                        <span>Below you'll find my skills, experience, and education — if my background is a fit for what you're looking for, don't hesitate to reach out.</span>
                        <div className="cta-buttons">
                            <button className="resume"
                                onClick={() => setShowResumeOptions(true)}
                            >
                                resume
                                <ResumeIcon />
                            </button>
                            <a className="link linkedin"
                                href="https://www.linkedin.com/in/donovanheynen/"
                            >
                                linkedin
                                <LinkedinIcon color="#EBEBFF" />
                            </a>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {showResumeOptions && <ResumeOptions onClose={() => setShowResumeOptions(false)} />}
                </AnimatePresence>
            </HeroSection>
            <BodySection>
                <div className="head">
                    <nav>
                        <span
                            onClick={() => setSection("Education")}
                            className={section === "Education" ? 'selected' : ''}
                        >
                            Education
                        </span>
                        <span 
                            onClick={() => setSection("Skills")}
                            className={section === "Skills" ? 'selected' : ''}
                        >
                            Skills
                        </span>
                        <span 
                            onClick={() => setSection("Experience")}
                            className={section === "Experience" ? 'selected' : ''}
                        >
                            Experience
                        </span>
                    </nav>
                    <div className="break"/>
                </div>
                <AnimatePresence mode="wait">
                <motion.div className="body-content"
                    key={section}
                    initial={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-100vw" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {section === "Education" ?
                    <Education />
                    : section === "Skills" ?
                    <Skills />
                    :
                    <Experience />
                    }
                </motion.div>
                </AnimatePresence>
            </BodySection>
            <LowerSection>
                
            </LowerSection>
        </main>
    )
}