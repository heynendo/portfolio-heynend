import { getWindowWidth } from '../../functions/GetWindowWidth'
import '../../style/about-card.css'

export default function AboutCard({
    image,
    title='title',
    subtitle=null,
    date=null,
    content=[]
}){

    const width = getWindowWidth()

    return(
        <div className="about-card">
            {width > 750 && <img src={image}/>}
            <div className="container">
                {width < 750 && <img src={image}/>}
                <div className="head">
                    <h3 className="title">{title}</h3>
                    {subtitle && <h3 className="secondary"> {width > 900 && '-'} {subtitle}</h3>}
                    {date && <span className="date">{date}</span>}
                </div>
                {width > 750 &&<div className="info">
                    {content.map((x, index) => <p key={index} className='sm-light'>{x}</p>)}
                </div>}
            </div>
            {width < 750 &&<div className="info">
                {content.map((x, index) => <p key={index} className='sm-light'>{x}</p>)}
            </div>}
        </div>
    )
}