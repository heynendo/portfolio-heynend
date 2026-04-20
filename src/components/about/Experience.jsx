import AboutCard from "./AboutCard";
import experience from '../../data/experience.json'

export default function Experience(){

    const experienceCards = experience.map((job) => (
        <AboutCard
            key={job.title}
            image={job.img}
            title={job.title}
            subtitle={job.company}
            date={job.date}
            content={job.info}
        />
    ))

    return(
        <div className="experience">
            {experienceCards}
        </div>
    )
}