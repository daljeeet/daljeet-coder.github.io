import React, { useEffect, useState } from "react";
// import logo from '../images/D.svg'
import NeonBtn from "./NeonBtn";
import { Link } from "react-scroll";
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
    <nav
      className={`z-50 w-full fixed md:p-4 shadow-xl ${
        bg ? "bg-darkbg" : "bg-transparent"
      }`}
    >
      <div className="md:w-5/6 m-auto flex items-center md:justify-between flex-col md:flex-row items-center ">
        <div className="flex items-center flex-no-shrink text-fontcolor mr-6">
          <Link
          onClick={()=>setMenu(!menu)}
            activeClass="active"
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
          className={`w-full flex-grow flex-col justify-center align-center md:flex md:flex-row md:w-auto overflow-hidden ${menu?"animate-wigle hidden md:animate-none":`animate-wiggle flex ${
                  bg ? "" : "bg-darkbg/70"
                }  md:bg-transparent md:animate-none`
          }`}
        >
          <div className="text-sm md:items-center md:flex md:flex-grow">
            <Link
            onClick={()=>setMenu(!menu)}
              to="skills"
              activeClass="text-red-700"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="w-28 font-bold text-gray-300 cursor-pointer block mt-4 md:mt-0 hover:text-white"
            >
              Skills
            </Link>
            <Link
            onClick={()=>setMenu(!menu)}
              to="projects"
              activeClass="text-red-200"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="w-28 font-bold text-gray-300 cursor-pointer block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white"
            >
              Projects
            </Link>
            <Link
            onClick={()=>setMenu(!menu)}
              to="contact"
              activeClass="text-red-200"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="w-28 font-bold text-gray-300 cursor-pointer block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="my-2 md:my-auto">
            <NeonBtn text={"Resume"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
