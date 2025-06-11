import React, {useState, useEffect} from 'react'
import headshot from '../images/headshot.jpg'
import workHistory from '../data/workHistory.json'
import projects from '../data/projects.json'
import '../styles/about.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import newlinkIcon from '../images/newlink-icon.png'

export default function About(){

    const [year, setYear] = useState('2025')
    const [yearData, setYearData] = useState(() => 
        workHistory.find(x => x.year === year))
    const [project, setProject] = useState(() => 
        projects.find(x => x.id === 1))

    useEffect(() => {
        setYearData(() => workHistory.find(x => x.year === year))
    },[year])

    function changeProject(x){

        const nextProj = project.id + x

        if (nextProj < 1){
            setProject(projects.find(x => x.id === projects.length))
        }else if (nextProj > projects.length){
            setProject(projects.find(x => x.id === 1))
        }else{
            setProject(projects.find(x => x.id === nextProj))
        }
    }

    

    return(
        <div className="about">
            <div className="card about-card">
                <h3>About Me</h3>
                <div>
                    <div className='about-p'>
                        <p>I'm a passionate and detail-oriented developer with a strong interest in building clean, user-friendly digital experiences. My journey into web development began with curiosity and evolved into a career fueled by creativity and problem-solving. Whether it's designing responsive layouts, working with modern JavaScript frameworks, or optimizing user interactions, I enjoy every part of the process that brings an idea to life on the web.</p>
                        <p>Over the years, I've had the opportunity to work on a range of projects—from personal portfolio sites to full-featured data-driven apps. I'm especially drawn to combining design and functionality, ensuring each project not only works well but looks great too. When I'm not coding, I enjoy learning new technologies, collaborating with other creatives, and exploring how tech can solve real-world problems.</p>
                    </div>
                    <img src={headshot}/>
                </div>
            </div>
            <h1>Past to Present</h1>
            <div className="card history-card">
                <h3>Work & Education</h3>
                <div>
                    <div className='content'>
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
            <div className="card projects-card">
                <h3>Projects</h3>
                <div>
                    <div className='content'>
                        <img src={project.img}/>
                        <p>{project.longDescription}</p>
                        <button
                            onClick={() => window.open(`${projects.link}`, '_blank')} 
                        >
                            visit site 
                            <img src={newlinkIcon} />
                        </button>
                    </div>
                    <div className='project-selector'>
                        <FaAngleLeft 
                            className='arrow'
                            onClick={() => changeProject(1)}
                        />
                        <div className='vert-break'></div>
                        <h1>{project.name}</h1>
                        <div className='vert-break'></div>
                        <FaAngleRight 
                            className='arrow'
                            onClick={() => changeProject(-1)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}