import { BrowserRouter , Routes, Route } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from "./components/About"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
