import '../styles/portfolio.css'
import projects from '../data/projects.json'
import LinkIcon from '../components/icons/LinkIcon'

export default function Portfolio(){

    const projectCards = projects
        .sort((a,b) => a.id - b.id)
        .map(proj => (
        <div className='project-card' key={proj.id}>
            <img src={proj.img} />
            <h4>{proj.name}</h4>
            <a href={proj.link} target='_blank'>visit site <LinkIcon /></a>
        </div>
    ))
    
    return(
        <div className="portfolio">
            <div className="container">
                <h1>My Projects</h1>
                <p>Check out some of the projects I have completed recently. I strive to build unique, eye catching websites for all of my clients.</p>
                <div className='projects'>
                    {projectCards}
                </div>
            </div>
        </div>
    )
}