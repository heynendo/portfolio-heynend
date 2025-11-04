

export default function HamburgerMenuIcon({color = "white"}){
    return(
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_126_312)">
            <path d="M26.1673 20.5552H3.75098V23.3639H26.1673V20.5552Z" fill={color}/>
            <path d="M26.2656 13.561H3.84937V16.3698H26.2656V13.561Z" fill={color}/>
            <path d="M26.2656 6.56641H3.84937V9.37514H26.2656V6.56641Z" fill={color}/>
            </g>
            <defs>
            <clipPath id="clip0_126_312">
            <rect width="30" height="30" fill={color}/>
            </clipPath>
            </defs>
        </svg>

    )
}