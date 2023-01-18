import React, { useEffect, useState } from "react";
// import logo from '../images/D.svg'
import {BiUpArrow} from 'react-icons/bi'
import NeonBtn from "./NeonBtn";
import { Link} from "react-scroll";
const Navbar = () => {
  const [scrl, setScrl] = useState(0);
  const [menu, setMenu] = useState(true);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const position = () => setScrl(Math.floor(window.scrollY));
    window.addEventListener("scroll", position);
    scrl > 320 ? setBg(true) : setBg(false);
  }, [scrl]);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
    <nav
      className={`z-50 w-full fixed top-0 md:py-2 shadow-xl ${
        bg ? "bg-darkbg" : "bg-transparent"
      }`}
    >
      <div className={`md:w-11/12 m-auto flex items-center md:justify-between flex-col md:flex-row items-center ${menu?"":`${bg?"":"md:bg-transparent bg-darkbg/70"}`} `}>
        <div className="flex py-4 md:py-0 items-center flex-no-shrink text-fontcolor mr-6">
          <Link
          onClick={()=>setMenu(true)}
            activeClass="text-white"
            className="cursor-pointer font-semibold text-xl tracking-tight"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
            DALJEET
          </Link>
          <div className="block mx-4 md:hidden ">
            <button
              className="flex items-center border-2 p-1 rounded-sm"
              onClick={handleMenu}
            >
              <svg
                className="w-4 h-3"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.200001 0H48V7.7921H0.200001V0ZM0.200001 19.5421H48V27.4579H0.200001V19.5421ZM0.200001 39.2079H48V47H0.200001V39.2079Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`w-full text-center md:flex flex-col md:flex-row md:w-auto overflow-hidden ${menu?"animate-wiggle duration-200 md:h-auto h-0 md:animate-none":`animate-in slide-in-from-top flex md:animate-none`} `}
        >
          <div className="text-base md:items-center md:flex">
            <Link
            onClick={()=>setMenu(true)}
              to="about"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
              className="w-28 mx-auto md:mx-0 font-bold cursor-pointer block mt-4 md:mt-0 hover:text-white"
            >
              About
            </Link>
            <Link
            onClick={()=>setMenu(true)}
              to="skills"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="w-28 mx-auto md:mx-0 font-bold cursor-pointer block mt-4 md:mt-0 hover:text-white"
            >
              Skills
            </Link>
            <Link
            onClick={()=>setMenu(true)}
              to="projects"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="w-28 mx-auto md:mx-0 font-bold cursor-pointer block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white"
            >
              Projects
            </Link>
            <Link
            onClick={()=>setMenu(true)}
              to="contact"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="w-28 font-bold mx-auto md:mx-0 cursor-pointer block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="my-2 items-center flex mx-auto md:mx-0 md:my-auto">
            <NeonBtn text={"Resume"} />
            {/* <div className={`mx-2 flex ${bg?"":"md:bg-transparent bg-darkbg/70"} py-1 px-3 rounded-xl shadow-inner bg-indigo-900 `}>
              <div className={`h-4 w-4 cursor-pointer bg-blue-500 rounded-full`}></div>
              <div className={`h-4 w-4 mx-2 cursor-pointer bg-red-900 rounded-full`}></div>
              <div className={`h-4 bg-indigo-600 w-4 cursor-pointer rounded-full`}></div></div> */}
          </div>
        </div>
      </div>
    </nav>
    {
      bg&&<Link to='home' smooth={true} className='fixed bottom-10 cursor-pointer right-10 z-10'><BiUpArrow className='text-3xl font-semibold' /> </Link>
    }
    </>
  );
};

export default Navbar;
