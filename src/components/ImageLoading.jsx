import { useState } from "react"
import '../style/image-loading.css'

export default function ImageLoading({ className, img, alt = "", onClick, priority = false }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div 
            className={`img-wrap ${loaded ? "img-wrap--loaded" : "img-wrap--loading"}`}
            onClick={onClick}
        >
            <img
                src={img}
                alt={alt}
                fetchpriority={priority ? "high" : "low"}
                loading={priority ? "eager" : "lazy"} 
                className={`${className || ""} img-load ${loaded ? "img-load--loaded" : ""}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}