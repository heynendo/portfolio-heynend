import AboutCard from "./AboutCard";
import GVLogo from '/logos/gvsu.png'
import education from '../../data/education.json'

export default function Education(){

    const educationCards = education.map(x => (
        <AboutCard 
            key={x.title}
            image={x.img}
            title={x.title}
            subtitle={x.company}
            date={x.date}
            content={x.info}
        />
    ))

    return(
        <div className="education">
            {educationCards}
        </div>
    )
}