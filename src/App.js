import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './pages/home/Hero.jsx'
// import TechStack from './pages/tack_stack/TechStack'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Footer from './pages/Footer'
import GitStatus from './pages/GitStatus'
// import WorkBook from './book_modal/WorkBook'
export const dark1 = {
  dark:"#152D40",
  light:"#225D8A"
}
export default function App() {
  return (
    <div className='bg-darkbg text-fontcolor' >
      <Navbar/>
      <Home/>
      <Skills />
      <GitStatus/>
      <Projects />
      <Contact />
      <Footer/>
      {/* <WorkBook/> */}
    </div>
  )
}