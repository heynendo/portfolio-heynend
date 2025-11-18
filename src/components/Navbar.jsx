import {useState, useEffect} from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import HandleNavigation from '../functions/HandleNavigation'
import '../styles/navbar.css'
import EmailIcon from './icons/EmailIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import HamburgerMenuIcon from './icons/HamburgerMenuIcon'
import HomeIcon from './icons/HomeIcon'
import AboutIcon from './icons/AboutIcon'
import PortfolioIcon from './icons/PortfolioIcon'
import ContactIcon from './icons/ContactIcon'
import { AnimatePresence, motion } from 'motion/react'

export default function NavBar() {

    const navigate = useNavigate()
    const location = useLocation()
    
    const [dropdown,setDropdown] = useState(false)
    
    const [color1, setColor1] = useState("#3550C8")
    const [color2, setColor2] = useState("white")
    
    const currentPage = location.pathname === "/" ? "Home" :
    location.pathname === "/about" ? "About" :
    location.pathname === "/portfolio" ? "Portfolio" :
    "Contact"
    
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (location.pathname === "/about" || location.pathname === "/contact") {
                setColor1("white");
                setColor2("#3550C8");
            } else {
                setColor1("#3550C8");
                setColor2("white");
            }
        }, 250);
        
        return () => clearTimeout(timer);
    }, [location])
    

    const [pageWidth, setPageWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    return(
        <>
        <header style={{backgroundColor: color1}}>
            {pageWidth > 600 ? 
            <>
            <nav style={{color: color2}}>
                <div className='link img' href="/" onClick={() => HandleNavigation(navigate,  "home", "/")}
                style={{border: `solid 3px ${color2}`}}
                >
                    <img className="headshot" src="/images/headshot.jpg" alt="Headshot" />
                </div>
                <div
                    onClick={() => HandleNavigation(navigate, "home", "/")}
                    className={`link ${location.pathname === "/" ? "active" : ""}`}
                >
                    Home
                </div>
                <div 
                    onClick={() => HandleNavigation(navigate, "about", "/about")}
                    className={`link ${location.pathname === "/about" ? "active" : ""}`}
                >
                    About Me
                </div>
                <div
                    onClick={() => HandleNavigation(navigate, "portfolio", "/portfolio")}
                    className={`link ${location.pathname === "/portfolio" ? "active" : ""}`}   
                >
                    Portfolio
                </div>
                <div
                    onClick={() => HandleNavigation(navigate, "contact", "/contact")}
                    className={`link ${location.pathname === "/contact" ? "active" : ""}`}
                >
                    Contact
                </div>
            </nav>
            <div className='contact-icons'>
                <a href="mailto:heynen.donovan@gmail.com"><EmailIcon color={color2}/></a>
                <a href='https://www.linkedin.com/in/donovanheynen/' target="_blank"><LinkedInIcon color={color2}/></a>
            </div>
            </>
            : 
            <>
            <div 
                className='link img sm-headshot' 
                onClick={() => HandleNavigation(navigate,  "home", "/")}
            >
                <img className="headshot" src="/images/headshot.jpg" style={{border: `solid 2px ${color2}`}} alt="Headshot" />
            </div>
            <div className='sm-options'>
                <span className='current-page' style={{color: color2}}>{currentPage}</span>
                <span onClick={() => {
                    setDropdown(x => !x)
                }}><HamburgerMenuIcon color={color2}/></span>
            </div>
            </>
            }
        </header>
        <AnimatePresence>
        {dropdown ? 
        <>
                <motion.div className='dropdown-menu'
                    style={{backgroundColor: color1}}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                    <nav>
                        <div
                            className={`link ${location.pathname === "/" ? "active" : ""}`}  
                            onClick={() => {
                                HandleNavigation(navigate,  "home", "/")
                                setDropdown(false)
                            }}
                            style={{color: color2}}
                        >
                            <HomeIcon color={color2}/>
                            Home
                        </div>
                        <div className='break' style={{backgroundColor: color2}}/>
                        <div
                            className={`link ${location.pathname === "/about" ? "active" : ""}`}  
                            onClick={() => {
                                HandleNavigation(navigate,  "about", "/about")
                                setDropdown(false)
                            }}
                            style={{color: color2}}
                        >
                            <AboutIcon color={color2}/>
                            About Me
                        </div>
                        <div className='break' style={{backgroundColor: color2}}/>
                        <div
                            className={`link ${location.pathname === "/portfolio" ? "active" : ""}`}  
                            onClick={() => {
                                HandleNavigation(navigate,  "portfolio", "/portfolio")
                                setDropdown(false)
                            }}
                            style={{color: color2}}
                        >
                            <PortfolioIcon color={color2}/>
                            Portfolio
                        </div>
                        <div className='break' style={{backgroundColor: color2}}/>
                        <div
                            className={`link ${location.pathname === "/contact" ? "active" : ""}`}  
                            onClick={() => {
                                HandleNavigation(navigate,  "contact", "/contact")
                                setDropdown(false)
                            }}
                            style={{color: color2}}
                        >
                            <ContactIcon color={color2}/>
                            Contact
                        </div>
                        <div className='break' style={{backgroundColor: color2}}/>
                        
                    </nav>
                    <div className='contact-icons'>
                        <a href="mailto:heynen.donovan@gmail.com"><EmailIcon color={color2}/></a>
                        <a href='https://www.linkedin.com/in/donovanheynen/' target="_blank"><LinkedInIcon color={color2}/></a>
                    </div>
                </motion.div>
                <motion.div className='dropdown-blur' onClick={() => setDropdown(x => !x)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25}}
                />
        </>
        :
        ''}
        </AnimatePresence>
        </>
    )
}