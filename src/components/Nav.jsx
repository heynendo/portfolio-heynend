import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import '../style/nav.css'
import { Exit1, HamburgerMenu1, TailedArrow3 } from "icons-by-heynendo"
import EmailLogo from "../icons/EmailIcon"
import LinkedinLogo from "../icons/LinkedinIcon"
import { AnimatePresence, motion } from "motion/react"
import ScrollToTop from "../functions/ScrollToTop"
import { getWindowWidth } from "../functions/GetWindowWidth"
import usePreventScroll from "../functions/usePreventScroll"
import EmailOptions from "./contact/EmailOptions"

export default function Nav(){
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [showEmailOptions, setShowEmailOptions] = useState(false)

    const navigate = useNavigate()
    const width = getWindowWidth()

    const pathname = window.location.pathname.replace("/", "")
    const currentPage = pathname === "" ? "Home" : 
        pathname.charAt(0).toUpperCase() + pathname.slice(1).toLowerCase()

    const currentPageCardStyle ={
        background: 'linear-gradient(90deg, #EBEBFF 0%, #B8B8FF 100%)'
    }
    const currentPageH3Style ={
        fontWeight: 900,
        color: '#0303E1'
    }

    //change page height based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    //prevent scroll when nav menu is open
    usePreventScroll(menuOpen)

    return(
        <>
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="name" onClick={() => {
                navigate('/')
                ScrollToTop()    
            }}>
                <h2 className="first">Donovan</h2><h2>Heynen</h2>
            </div>
            <div className="right">
                {width > 750 &&
                <button
                    onClick={() => {
                        navigate('/contact')
                        ScrollToTop()
                    }}
                >
                    Let's Talk
                    <TailedArrow3 size={20}/>
                </button>}
                <button className="hamburger"
                    onClick={() => setMenuOpen(true)}
                >
                    <HamburgerMenu1 />
                </button>
            </div>
        </header>
        <AnimatePresence>
        {menuOpen &&
        <div className="nav-open">
            <motion.div className="blur" 
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, delay: 0.25 } }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.15 } }}
            />
            <motion.div className="menu"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
                <div className="top">
                    <Exit1 
                        onClick={() => setMenuOpen(false)}
                        color="#EBEBFF"
                        size={width > 750 ? 25 : 20}
                        style={{cursor: 'pointer'}}
                    />
                    <nav>
                        <Link className="card" to='/'
                            style={currentPage === "Home" ? currentPageCardStyle : {}}
                            onClick={() => {
                                setMenuOpen(false)
                                ScrollToTop()
                            }}
                        >
                            <h3 style={currentPage === "Home" ? currentPageH3Style : {}}>Home</h3>
                        </Link>
                        <Link className="card" to='/about'
                            style={currentPage === "About" ? currentPageCardStyle : {}}
                            onClick={() => {
                                setMenuOpen(false)
                                ScrollToTop()
                            }}
                        >
                            <h3 style={currentPage === "About" ? currentPageH3Style : {}}>About Me</h3>
                        </Link>
                        <Link className="card" to='/portfolio'
                            style={currentPage === "Portfolio" ? currentPageCardStyle : {}}
                            onClick={() => {
                                setMenuOpen(false)
                                ScrollToTop()
                            }}
                        >
                            <h3 style={currentPage === "Portfolio" ? currentPageH3Style : {}}>Portfolio</h3>
                        </Link>
                        <Link className="card" to='/contact'
                            style={currentPage === "Contact" ? currentPageCardStyle : {}}
                            onClick={() => {
                                setMenuOpen(false)
                                ScrollToTop()
                            }}
                        >
                            <h3 style={currentPage === "Contact" ? currentPageH3Style : {}}>Contact</h3>
                        </Link>
                        <div className="break"/>
                        <div className="social-buttons">
                            <button className="email"
                                onClick={() => setShowEmailOptions(true)}
                            >
                                email
                                <EmailLogo />
                            </button>
                            <a className="linkedin link"
                                href="https://www.linkedin.com/in/donovanheynen/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin
                                <LinkedinLogo />
                            </a>
                        </div>
                        <AnimatePresence>
                            {showEmailOptions && <EmailOptions onClose={() => setShowEmailOptions(false)} />}
                        </AnimatePresence>
                    </nav>
                </div>
                <h2>Donovan Heynen</h2>
            </motion.div>
        </div>
        }
        </AnimatePresence>
        </>
    )
}