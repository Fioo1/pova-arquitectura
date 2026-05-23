import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Mission from "./components/Mission"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import ProjectDetail from "./pages/ProjectDetail"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        })
      }
    }
  }, [location])

  return null
}

function Home() {
  return (
    <>
      <Hero />
      <About />
	  <Mission />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div>
      <Navbar />

	  <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/proyecto/:id"
          element={<ProjectDetail />}
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App