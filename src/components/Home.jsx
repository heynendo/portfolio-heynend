import { Link } from 'react-router-dom'
import projectsAndCerts from '../data/projectsAndCerts.json'
import '../styles/home.css'

export default function Home(){

    const projectCards = projectsAndCerts.slice(0,2).map(project =>(
        <>
            <Link to={`about#projects-${project.id}`} className='project-card' key={project.id}>
                <h3>{project.name}</h3>
                <img src={project.img} />
                <p>{project.shortDescription}</p>
                <div className='background'></div>
            </Link>
            <div className='vert-break'></div>
        </>
    ))

    return(
        <div className="home">
            <div className="main-card">
                <div className='background'></div>
                <img className='headshot' src="/images/headshot.jpg" />
                <h1 className='name'>Donovan Heynen</h1>
                <button className='button resume'>
                    resume
                    <img src="/images/newlink-icon.png" />
                </button>
                <button className='button linkedin'>
                    linkedIn
                    <img src="/images/newlink-icon.png" />
                </button>
                <Link 
                    to='about' 
                    className='button more'
                >
                    learn more
                </Link>
            </div>
            <div className='projects'>
                <h3>Projects</h3>
                <div className='break'></div>
                <div className='cards'>
                    {projectCards}
                    <Link to='about#projects' className='project-link'><h3>see all projects</h3></Link>
                </div>
            </div>
        </div>
    )
}