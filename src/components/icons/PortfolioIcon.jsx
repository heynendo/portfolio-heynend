

export default function PortfolioIcon({color}){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.31592 3.15771H8.42118V5.26298H6.31592V3.15771Z" fill={color}/>
            <path d="M8.42118 7.36816H6.31592V9.47343H8.42118V7.36816Z" fill={color}/>
            <path d="M6.31592 11.5791H8.42118V13.6844H6.31592V11.5791Z" fill={color}/>
            <path d="M9.99951 5.26352H16.8416V3.68457H9.99951V5.26352Z" fill={color}/>
            <path d="M16.8416 9.47348H9.99951V7.89453H16.8416V9.47348Z" fill={color}/>
            <path d="M9.99951 13.6839H16.8416V12.105H9.99951V13.6839Z" fill={color}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.15771 0H19.9998V16.8421H3.15771V0ZM4.73666 1.57895H18.4209V15.2632H4.73666V1.57895Z" fill={color}/>
            <path d="M0 3.15771V19.9998H16.8421V18.4209H1.57895V3.15771H0Z" fill={color}/>
        </svg>

    )
}