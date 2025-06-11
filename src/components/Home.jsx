import { Link } from 'react-router-dom'
import headshot from '../images/headshot.jpg'
import '../styles/home.css'
import downloadIcon from '../images/download-icon.png'
import newlinkIcon from '../images/newlink-icon.png'
import projects from '../data/projects.json'
import rebiesLogo from '../images/rebies-logo.png'

export default function Home(){

    const projectCards = projects.slice(0,2).map(project =>(
        <Link className='project-card' key={project.id}>
            <h3>{project.name}</h3>
            <img src={project.img} />
            <p>{project.shortDescription}</p>
            <div className='background'></div>
        </Link>
    ))

    return(
        <div className="home">
            <div className="main-card">
                <div className='background'></div>
                <img className='headshot' src={headshot}/>
                <h1 className='name'>Donovan Heynen</h1>
                <button className='resume'>
                    resume
                    <img src={newlinkIcon} />
                </button>
                <button className='linkedin'>
                    linkedIn
                    <img src={newlinkIcon} />
                </button>
                <button className='more'>learn more</button>
            </div>
            <div className='projects'>
                <h3>Projects</h3>
                <div className='break'></div>
                <div className='cards'>
                    {projectCards}
                    <Link className='project-link'><h3>see all projects</h3></Link>
                </div>
            </div>
        </div>
    )
}