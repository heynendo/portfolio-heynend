import '../styles/portfolio.css'
import projects from '../data/projects.json'
import LinkIcon from '../components/icons/LinkIcon'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MoonLoader } from 'react-spinners'
import { video } from 'motion/react-client'

export default function Portfolio(){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const [filterOption, setFilterOption] = useState('freelance')
    const [popout, setPopout] = useState(null)
    const [videoLoaded, setVideoLoaded] = useState(false)

    useEffect(() => {
        if (popout !== null){
            setVideoLoaded(false)
        }
    }, [popout])

    const projectCards = projects
        .sort((a,b) => a.id - b.id)
        .filter(proj => proj.type === filterOption || filterOption === "all")
        .map(proj => (
        <div className='project-card' key={proj.id}>
            <div className='image-wrapper'>
                <img src={proj.img} />
                <div className='image-overlay' onClick={() => setPopout(proj)}>
                    <span>SEE MORE</span>
                </div>
            </div>
            <h4>{proj.name}</h4>
            <a className='site-link' href={`https://${proj.link}`} target='_blank'>visit site <LinkIcon /></a>
        </div>
    ))
    
    return(
        <>
        <div className="portfolio">
            <div className="container">
                <h1>My Projects</h1>
                <p>
                    Check out some of my recent work. Below are client sites and personal projects, each one showcasing my approach to building modern, responsive web solutions. Click the images below for more info on each project.
                </p>
                <div className='filters'>
                    <span
                        className={filterOption === 'freelance' ? 'selected' : ''}
                        onClick={() => { setFilterOption('freelance') }}
                    >
                        Client Work
                    </span>
                    <span
                        className={filterOption === 'other' ? 'selected' : ''}
                        onClick={() => { setFilterOption('other') }}
                    >
                        Other Projects
                    </span>
                    <span
                        className={filterOption === 'all' ? 'selected' : ''}
                        onClick={() => { setFilterOption('all') }}
                    >
                        All
                    </span>
                </div>
                <AnimatePresence mode="wait">
                <motion.div className="projects"
                    key={filterOption} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    
                        {projectCards}
                </motion.div>
                </AnimatePresence>
            </div>
        </div>
        <AnimatePresence mode='wait'>
        {popout && 
        <>
        <motion.div className='background-blur' onClick={() => setPopout(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25, delay: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
            <span>CLOSE</span>
        </motion.div>
        <motion.div className='project-moreinfo'
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { duration: 0.35 } }}
            exit={{ x: "100%", transition: { duration: 0.25, delay: 0.25 } }}
        >
            <div className='head'>
                <h4>{popout.name}</h4>
                <a className='website-link' href={`https://${popout.link}`} target='_blank'>
                    {popout.link} <LinkIcon color='black'/>
                </a>
            </div>
            <motion.video src={width > 750 ? popout.video : popout.videoMobile} 
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setVideoLoaded(true)}
                className={videoLoaded ? 'show-video' : 'hide-video'}
                initial={{ opacity: 0 }}
                animate={{ opacity: videoLoaded ? 1 : 0 }}
                transition={{ duration: 0.25, delay: videoLoaded ? 0.25 : 0 }}
            />
            <AnimatePresence mode="wait">
            {videoLoaded === false &&
            <div className='loading'
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
            >
                <p>Video loading...</p>
                <MoonLoader 
                    size={75}
                    color='white'
                    speedMultiplier={0.65}
                    className='moon-loader'
                />   
            </div>
            }
            </AnimatePresence>
            <p>{popout.details}</p>
            <div className='tools'>
                {popout.tools.map(tool => 
                <div className='tool' key={tool}>{tool}</div>
                )}
            </div>
        </motion.div>
        </>}
        </AnimatePresence>
        </>
    )
}