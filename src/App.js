import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './pages/home/Hero.jsx'
import TechStack from './pages/tack_stack/TechStack'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'

export default function App() {
  return (
    <div className='bg-darkbg text-fontcolor' >
      <div >
      <Navbar/>
      </div>
      <div className='' >
      <Home/>
      </div>
      <div className='pt-14 h-96 ' >
      <About />
      </div>
      <div className='pt-14 h-96 ' >
      <TechStack />
      </div>
      <div className='pt-14 h-96 ' >
      <Skills />
      </div>
      <div className='pt-14 h-96 ' >
      <Projects />
      </div>
      <div className='pt-14 h-96 ' >
      <Contact />
      </div>
    </div>
  )
}