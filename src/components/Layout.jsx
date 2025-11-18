import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
}