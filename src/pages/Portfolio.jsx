import HeroSection from "../components/HeroSection"
import BodySection from "../components/BodySection"
import LowerSection from "../components/LowerSection"
import ProjectSelector from "../components/portfolio/ProjectSelector"
import ProjectInfo from "../components/portfolio/ProjectInfo"
import projects from '../data/projects.json'
import '../style/portfolio.css'
import { useState } from "react"
import { getWindowWidth } from "../functions/GetWindowWidth"

export default function Portfolio(){

    const [selectedProject, setSelectedProject] = useState(projects[0])
    const [projectNav, setProjectNav] = useState(false)
    const [activeFilter, setActiveFilter] = useState('All Projects')
    const [activeSort, setActiveSort] = useState('Default')

    const width = getWindowWidth()

    return(
        <main className="portfolio">
            <HeroSection>
                <h1 className="bold">Ideas <span>brought to life.</span></h1>
                <div className="cta">
                    <span>
                        Every great project starts with an idea. Check out some of my client and personal projects below and see how I bring them to life.
                    </span>
                </div>
            </HeroSection>
            <BodySection>
                {(width >= 850 || projectNav) && (
                    <ProjectSelector 
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        setProjectNav={setProjectNav}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        activeSort={activeSort}
                        setActiveSort={setActiveSort}
                    />
                )}
                {width >= 850 && <div className="main-break" />}
                {(width >= 850 || !projectNav) && (
                    <ProjectInfo 
                        selectedProject={selectedProject}
                        setProjectNav={setProjectNav}
                    />
                )}
            </BodySection>
            <LowerSection>
                
            </LowerSection>
        </main>
    )
}