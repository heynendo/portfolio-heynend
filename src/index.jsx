import { BrowserRouter , Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { StrictMode } from 'react'
import MotionWrapper from "./functions/MotionWrapper"
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from "./components/About"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"

//TODO:
//add framer motion support for each page change

function AppRoutes(){
  const location = useLocation()

  return(
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<MotionWrapper> <Home /> </MotionWrapper>}/>
        <Route path="about" element={<MotionWrapper> <About /> </MotionWrapper>}/>
        <Route path="contact" element={<MotionWrapper> <Contact /> </MotionWrapper>}/>
      </Route>
    </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
