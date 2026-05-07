import { useEffect, useState } from 'react'
import projects from '../../data/projects.json'
import OptionsIcon from '../../icons/OptionsIcon'
import { Exit1, TailedArrow3 } from 'icons-by-heynendo'
import { AnimatePresence, motion } from 'motion/react'
import { getWindowWidth } from '../../functions/GetWindowWidth'

const FILTERS = ['All Projects', 'Personal Projects', 'Client Projects']
const SORTS = ['Default', 'New to Old', 'Old to New']


export default function ProjectSelector({
    selectedProject, 
    setSelectedProject, 
    setProjectNav,
    activeFilter,
    setActiveFilter,
    activeSort,
    setActiveSort
}){

    const [optionsToggle, setOptionsToggle] = useState(false)

    const width = getWindowWidth()

    const projectCards = projects
        .filter(proj => {
            if (activeFilter === 'Personal Projects') return proj.type === 'personal'
            if (activeFilter === 'Client Projects') return proj.type === 'client'
            return true
        })
        .sort((a, b) => {
            if (activeSort === 'New to Old') return b.date.localeCompare(a.date)
            if (activeSort === 'Old to New') return a.date.localeCompare(b.date)
            return 0
        })
        .map(proj => (
            <div key={proj.name} className={`card ${selectedProject.name === proj.name ? 'selected' : ''}`} onClick={() => {
                setSelectedProject(proj)
                if (width <= 850){
                    setProjectNav(false)
                }
            }}>
                {proj.name}
            </div>
        ))

    useEffect(() => {
        if (!optionsToggle) {
            const visibleProjects = projects.filter(proj => {
                if (activeFilter === 'Personal Projects') return proj.type === 'personal'
                if (activeFilter === 'Client Projects') return proj.type === 'client'
                return true
            })

            const stillVisible = visibleProjects.some(proj => proj.name === selectedProject.name)
            if (!stillVisible) setSelectedProject(visibleProjects[0])
        }
    }, [optionsToggle])

    return(
        <div className="project-selector">
            <AnimatePresence mode="wait">
            {optionsToggle ?
            <motion.div className='container'
                key="options"
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
            >
                <div className="head">
                    <button className='back' onClick={() => setOptionsToggle(false)}><TailedArrow3 rotation={180} size={20}/></button>
                    <h3>Options</h3>
                </div>
                <div className="projects">
                    <div className='list filter'>
                        <h3>Filter</h3>
                        {FILTERS.map(filter => (
                            <div
                                key={filter}
                                className={`card ${activeFilter === filter ? 'selected' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </div>
                        ))}
                    </div>
                    <div className='list sort'>
                        <h3>Sorting</h3>
                        {SORTS.map(sort => (
                            <div
                                key={sort}
                                className={`card ${activeSort === sort ? 'selected' : ''}`}
                                onClick={() => setActiveSort(sort)}
                            >
                                {sort}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            :
            <motion.div className='container'
                key="projects"
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
            >
                <div className="head">
                    {width < 850 &&
                    <button className='exit-menu'
                        onClick={() => setProjectNav(x => !x)}
                    >
                        <Exit1 
                            color='#EBEBFF'
                            size={10}
                        />
                    </button>
                    }
                    <h3>Projects</h3>
                    <button className='options' onClick={() => setOptionsToggle(true)}><OptionsIcon /></button>
                </div>
                <div className="projects">
                    {projectCards}
                </div>
            </motion.div>
            }
        </AnimatePresence>
        </div>
    )
}