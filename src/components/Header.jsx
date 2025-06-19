import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export default function Header() {

    const [pageWidth, setPageWidth] = useState(window.innerWidth)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth)
            if (window.innerWidth > 1000) setToggleDropdown(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    function handleDropdown(){
        if (window.innerWidth < 1000){
            setToggleDropdown(prevToggle => !prevToggle)
        }
    }

    return(
        <header>
            <div className='top'>
                <Link to='/'>
                    <h3>Donovan Heynen</h3>
                    <h3 className='light-italic'>Frontend Web Developer</h3>
                </Link>
                {pageWidth > 1000 ? <nav className='lg'>
                    <Link to='/'>Home</Link>
                    <Link to='about'>About</Link>
                    <Link to='contact'>Contact</Link>
                </nav> : 
                <img 
                    src="/images/hamburger-icon.png"
                    className='hamburger-icon'
                    onClick={handleDropdown}
                />
                }
            </div>
            <div className='break'></div>
            <nav className={`sm ${toggleDropdown ? 'open' : 'closed'}`}>
                <Link 
                    to='/'
                    onClick={handleDropdown}
                >
                    <h3>Home</h3>
                </Link>
                <div className='break'></div>
                <Link 
                    to='about'
                    onClick={handleDropdown}
                >
                    <h3>About</h3>
                </Link>
                <div className='break'></div>
                <Link 
                    to='contact'
                    onClick={handleDropdown}
                >
                    <h3>Contact</h3>
                </Link>
                <div className='break'></div>
            </nav>
        </header>
    )
}