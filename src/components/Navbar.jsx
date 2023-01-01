import React, { useEffect, useState } from 'react'
// import logo from '../images/D.svg'
import NeonBtn from './NeonBtn'
import {Link, } from 'react-scroll'


const Navbar = () => {  
  const [scrl, setScrl] = useState(0)
  const [bg,setBg] = useState(false)
  useEffect(() => {
    const position=()=>setScrl(Math.floor(window.scrollY))
   window.addEventListener("scroll", position);
   (scrl>320)?setBg(true):setBg(false)
  }, [scrl])
    const navs = ["About", "Skills","Projects", "Contact"]
  return (
    <div className={`z-50 fixed w-full ${bg?'bg-darkbg':'bg-transparent'}`} >
    <div className='h-12 flex  w-10/12 m-auto items-center' >
        <div className='w-1/3 h-full flex relative'>
        <Link activeClass="active" className="cursor-pointer" to='home' spy={true} smooth={true} offset={-80} duration={600} >
          {/* <img src={logo} className='w-8 cursor-pointer' alt="" /> */}
          <h4 className='bottom-2 font-bold left-4 absolute' >DALJEET</h4>
        </Link>
        </div>
        <div className='flex w-full items-center'>
            {
              navs.map((el,id)=><Link key={id} activeClass="text-red-200" className="w-28 font-bold text-gray-300 cursor-pointer" to={el.toLowerCase()} spy={true} smooth={true} offset={-80} duration={600} >{el}</Link>)
            }
            <NeonBtn text={'Resume'} />
        </div>
    </div>
    </div>
  )
}

export default Navbar