

export default function HandleNavigation(navigate, id, path) {

    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        navigate(path, { replace: true })
    }
}