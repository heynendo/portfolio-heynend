
export default function AboutNav({navContent, setNavContent}){
    return(
        <nav className="about-nav">
            <div className="content">
                <div className="break-left" />
                <span 
                    onClick={() => setNavContent("Education")}
                    className={`selector ${navContent == "Education" ? 'selected' : ''}`}
                >Education & Certifications</span>
                <div className="break-center" />
                <span 
                    onClick={() => setNavContent("Skills")}
                    className={`selector ${navContent == "Skills" ? 'selected' : ''}`}
                >Skills</span>
                <div className="break-right" />
            </div>
            <div className="break-bottom" />
        </nav>
    )
}