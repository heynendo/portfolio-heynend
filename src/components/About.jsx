import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import workHistory from '../data/workHistory.json'
import projectsAndCerts from '../data/projectsAndCerts.json'
import '../styles/about.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export default function About(){

    const { hash } = useLocation()

    const [projectFade, setProjectFade] = useState(false)
    const [yearFade, setYearFade] = useState(false)
    const [year, setYear] = useState('2025')
    const [yearData, setYearData] = useState(() => 
        workHistory.find(x => x.year === year))
    const [project, setProject] = useState(() => 
        projectsAndCerts.find(x => x.id === 1))

    useEffect(() => {
        setYearData(() => workHistory.find(x => x.year === year))

        setYearFade(true)
        setTimeout(() => {
            setYearFade(false)
        }, 50)
    },[year])

    useEffect(() => { //FIXME: update to include setting the correct project
        if (hash) {
            const hashSplit = hash.split('-')
            const element = document.querySelector(hashSplit[0])
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            if (hashSplit.length > 1){
                setProject(projectsAndCerts.find(x => x.id === Number(hashSplit[1])))
            }
        }
    }, [hash])

    function changeProject(x){

        const nextProj = project.id + x

        if (nextProj < 1){
            setProject(projectsAndCerts.find(x => x.id === projectsAndCerts.length))
        }else if (nextProj > projectsAndCerts.length){
            setProject(projectsAndCerts.find(x => x.id === 1))
        }else{
            setProject(projectsAndCerts.find(x => x.id === nextProj))
        }

        setProjectFade(true)
        setTimeout(() => {
            setProjectFade(false)
        }, 50)
    }

    

    return(
        <div className="about">
            <div className="card about-card">
                <h3>About Me</h3>
                <div>
                    <img src="/images/headshot.jpg"/>
                    <div className='about-p'>
                        <p>I'm a full-stack developer specializing in building responsive, user friendly interfaces with React. I develop secure, scalable backends through Node.js, Express, and MongoDB, and deliver production ready apps to cloud platforms. I write efficient, maintainable code and stay current with modern technologies.</p> 
                        
                        <p>With a computer science degree and background in automotive engineering, I bring strong problem-solving skills and technical thinking to my work. I've completed formal training in frontend development with React, followed by hands-on projects that integrate both frontend and backend technologies. Currently, I'm expanding my backend expertise through cloud deployment, automation, and testing as I work toward mastering the full stack development lifecycle.</p>
                    </div>
                </div>
            </div>
            <h1>Past to Present</h1>
            <div className="card history-card">
                <h3>Work & Education</h3>
                <div>
                    <div className={`content ${yearFade ? 'fade' : ''}`}>
                        <img src={yearData.imgs[0]}/>
                        <ul>
                            {yearData?.data?.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='year-selector'>
                        <span onClick={() => setYear("2021")}>
                            {year === "2021" ? 
                                <h1 className='lg selected'>{year}</h1> : 
                                <h1 className='lg'>21</h1>
                            }
                        </span>
                        <div className='vert-break'></div>
                        <span onClick={() => setYear("2022")}>
                            {year === "2022" ? 
                                <h1 className='lg selected'>{year}</h1> : 
                                <h1 className='lg'>22</h1>
                            }
                        </span>
                        <div className='vert-break'></div>
                        <span onClick={() => setYear("2023")}>
                            {year === "2023" ? 
                                <h1 className='lg selected'>{year}</h1> : 
                                <h1 className='lg'>23</h1>
                            }
                        </span>
                        <div className='vert-break'></div>
                        <span onClick={() => setYear("2024")}>
                            {year === "2024" ? 
                                <h1 className='lg selected'>{year}</h1> : 
                                <h1 className='lg'>24</h1>
                            }
                        </span>
                        <div className='vert-break'></div>
                        <span onClick={() => setYear("2025")}>
                            {year === "2025" ? 
                                <h1 className='lg selected'>{year}</h1> : 
                                <h1 className='lg'>25</h1>
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className="card projects-card" id='projects'>
                <h3>Projects & Certificates</h3>
                <div>
                    <div className={`content ${projectFade ? 'fade' : ''}`}>
                        <img src={project.img}/>
                        <p>{project.longDescription}</p>
                        {project.gitLink ? 
                            <div className='git-project-links'>
                                <button
                                    onClick={() => window.open(`${project.link}`, '_blank')} 
                                >
                                    {project.linkText} 
                                    <img src="/images/newlink-icon.png" />
                                </button>
                                <button
                                    onClick={() => window.open(`${project.gitLink}`, '_blank')} 
                                >
                                    GitHub link 
                                    <img src="/images/newlink-icon.png" />
                                </button>
                            </div> 
                        :
                            <button
                                onClick={() => window.open(`${project.link}`, '_blank')} 
                            >
                                {project.linkText} 
                                <img src="/images/newlink-icon.png" />
                            </button>
                        }
                    </div>
                    <div className='project-selector'>
                        <FaAngleLeft 
                            className='arrow'
                            onClick={() => changeProject(-1)}
                        />
                        <h1 className={`project-name ${projectFade ? 'fade' : ''}`}>
                            {project.name}
                        </h1>
                        <FaAngleRight 
                            className='arrow'
                            onClick={() => changeProject(1)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}