import Cloudflare from '/logos/cloudflare.png'
import skills from '../../data/skills.json'

export default function Skills(){

    const frontendSkills = skills.frontend.map((skill) => (
        <div className="card" key={skill.name}>
            {skill.name}
            <img src={skill.logo} alt={skill.name} />
        </div>
    ))

    const backendSkills = skills.backend.map((skill) => (
        <div className="card" key={skill.name}>
            {skill.name}
            <img src={skill.logo} alt={skill.name} />
        </div>
    ))

    return(
        <div className="skills">
            <h3>Frontend</h3>
            <div className="skill-cards">
                {frontendSkills}
            </div>
            <h3>Backend</h3>
            <div className="skill-cards">
                {backendSkills}
            </div>
        </div>
    )
}