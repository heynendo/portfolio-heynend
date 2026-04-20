import { useEffect, useState } from "react"
import '../../style/project-info.css'
import LinkIcon from '../../icons/LinkIcon'
import GithubIcon from "../../icons/GithubIcon"
import { AnimatePresence, motion } from "motion/react"
import { getWindowWidth } from '../../functions/GetWindowWidth'
import { HamburgerMenu1 } from "icons-by-heynendo"

export default function ProjectInfo({ selectedProject, setProjectNav  }) {

    const [selectedPhoto, setSelectedPhoto] = useState(selectedProject.photos[0])
    const [viewMode, setViewMode] = useState("desktop")
    
    const width = getWindowWidth()
    const hasMobile = !!selectedProject?.mobilePhotos && width > 900


    useEffect(() => {
        setSelectedPhoto(selectedProject.photos[0])
    }, [selectedProject])

    return (
        <div className="project-info">
            <AnimatePresence mode="wait">
                <motion.div
                    className="main"
                    key={selectedProject.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="project-title">
                        {width < 850 &&
                        <button className="menu" onClick={() => setProjectNav(x => !x)}>
                            <HamburgerMenu1 
                                size={20}
                                color="#EBEBFF"
                            />
                        </button>
                        }
                        <h2>{selectedProject.name}</h2>
                    </div>

                    <div className={`slideshow ${viewMode}`}>
                        <div className='main-img'>
                            <img
                                src={selectedPhoto}
                            />
                        </div>
                        <div className="image-selector">
                            {selectedProject.photos.map(photo => (
                                <div className="option" key={photo}>
                                    <img
                                        src={photo}
                                        onClick={() => {
                                            setSelectedPhoto(photo)
                                        }}
                                    />
                                </div>
                                ))
                            }
                        </div>
                    </div>

                    <p>{selectedProject.desc}</p>
                </motion.div>
            </AnimatePresence>

            <div className="bottom">
                <div className={`selector ${hasMobile ? 'empty' : 'empty'}`}>
                {/*FIXME: add mobile image options
                hasMobile &&
                    <>
                    <button
                        className={`selector-btn ${viewMode === "desktop" ? "active" : ""}`}
                        onClick={() => setViewMode("desktop")}
                    >
                        desktop
                    </button>
                    <button
                        className={`selector-btn ${viewMode === "mobile" ? "active" : ""}`}
                        onClick={() => setViewMode("mobile")}
                    >
                        mobile
                    </button>
                    </>
                */}
                </div>
                <div className="links">
                    <a
                        className="site link"
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        visit site
                        <LinkIcon />
                    </a>

                    <a
                        className="github link"
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}