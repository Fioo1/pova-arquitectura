import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import ProjectDetail from "./pages/ProjectDetail"

function Home() {
  return (
    <>
      <Hero />
      <About />
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