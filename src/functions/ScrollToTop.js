

export default function ScrollToTop(){
    const start = window.scrollY
    const duration = 750
    const startTime = performance.now()

    function ease(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    function step(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, start * (1 - ease(progress)))
        if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
}