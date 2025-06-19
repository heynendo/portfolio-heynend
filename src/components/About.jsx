import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import headshot from '../../public/images/headshot.jpg'
import workHistory from '../data/workHistory.json'
import projects from '../data/projects.json'
import '../styles/about.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import newlinkIcon from '../../public/images/newlink-icon.png'

export default function About(){

    const { hash } = useLocation()

    const [projectFade, setProjectFade] = useState(false)
    const [yearFade, setYearFade] = useState(false)
    const [year, setYear] = useState('2025')
    const [yearData, setYearData] = useState(() => 
        workHistory.find(x => x.year === year))
    const [project, setProject] = useState(() => 
        projects.find(x => x.id === 1))

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
                setProject(projects.find(x => x.id === Number(hashSplit[1])))
            }
        }
    }, [hash])

    function changeProject(x){

        const nextProj = project.id + x

        if (nextProj < 1){
            setProject(projects.find(x => x.id === projects.length))
        }else if (nextProj > projects.length){
            setProject(projects.find(x => x.id === 1))
        }else{
            setProject(projects.find(x => x.id === nextProj))
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
                    <img src={headshot}/>
                    <div className='about-p'>
                        <p>I'm a front-end web developer with a passion for crafting clean, responsive, and user-friendly interfaces. I currently specialize in building dynamic pages with HTML, CSS, JavaScript, and React. With a strong eye for detail, I focus on writing efficient code and building responsive websites that look and feel great. I'm constantly exploring new technologies and best practices to stay current and keep improving as a developer.</p>

                        <p>With a background in automotive engineering, I'm now transitioning into a career in web development, bringing with me a strong foundation in problem-solving and technical thinking. I've complemented my college and engineering experience with a formal education in front-end development, focusing on React, and I'm eager to apply these skills in a role that challenges and grows my capabilities. Currently I'm expanding into back-end technologies as I work toward becoming a full-stack developer.</p>
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
                <h3>Projects</h3>
                <div>
                    <div className={`content ${projectFade ? 'fade' : ''}`}>
                        <img src={project.img}/>
                        <p>{project.longDescription}</p>
                        <button
                            onClick={() => window.open(`${project.link}`, '_blank')} 
                        >
                            visit site 
                            <img src={newlinkIcon} />
                        </button>
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