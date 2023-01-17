import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './pages/home/Hero.jsx'
import AOS from 'aos';
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Footer from './pages/Footer'
import GitStatus from './pages/GitStatus'
import About from './pages/About'
export default function App() {
  useEffect(() => {
    AOS.init()
    document.title="Daljeet Singh"
  }, [])
  
    return (
    <div className='bg-darkbg relative text-fontcolor' >
      <Navbar/>
      <div>
      </div>
      <Home/>
      <About/>
      <Skills />
      <GitStatus/>
      <Projects />
      <Contact />
      <Footer/>
      {/* <WorkBook/> */}
    </div>
  )
}