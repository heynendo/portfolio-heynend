import { StrictMode, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"

import "./styles/index.css"; // your own styles

const sections = [
  { id: "home", path: "/", component: <Home /> },
  { id: "about", path: "/about", component: <About /> },
  { id: "portfolio", path: "/portfolio", component: <Portfolio /> },
  { id: "contact", path: "/contact", component: <Contact /> },
];

function AppRoutes() {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  // 🔹 Update the route based on which section is most visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          const matched = sections.find((s) => s.id === mostVisible.target.id);
          if (matched) navigate(matched.path, { replace: true });
        }
      },
      {
        threshold: [0.3, 0.6, 0.9], // adjust how much of section must be visible
      }
    );

    sectionRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, [navigate])

  return (
    <>
    <Navbar />
    <div className="scroll-container">
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="scroll-section"
        >
          {s.component}
        </section>
      ))}
    </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
