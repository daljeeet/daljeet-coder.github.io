import React from "react";
import welImg from "../../images/me.png";
import WaveBg from "../../components/WaveBg";
import Hero from "./Hero";
import "../../styling/hero.css";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <div className="w-full relative md:h-screen" id="home">
        <div className="w-5/6 z-10 pt-14 overflow-hidden m-auto relative h-fit md:h-full flex justify-between items-center flex-col md:flex-row ">
          <div className="md:w-1/2  pb-4 z-10 text-center ">
        <h1 className="headding text-4xl my-4 tracking-wider">Nameste..</h1>
          <div className="bg-black/10 pb-4 z-10 text-center rounded-xl">
            
            <Hero />
            {/* Neon Effect Button  */}

            <div className="mt-10 w-auto ">
              <button
                className={`neon ml-10 border-2 rounded-lg relative overflow-hidden py-1 px-2 text-black`}
              >
                <span className="absolute block"></span>
                <span className="absolute block"></span>
                <span className="absolute block"></span>
                <span className="absolute block"></span>
                <h4 className="flex px-2 font-semibold text-lg">

                 <Link to='projects'spy={true}
            smooth={true}
            offset={-80}
            duration={300} >My work...</Link>
                </h4>
              </button>
            </div>
          </div>
          </div>
          <div className=" md:w-1/2 w-5/6 pt-4 z-10 ">
            <img src={welImg} alt="welcome" />
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 right-0 z-0">
          <WaveBg />
        </div>
        <div className="bg-gradient-to-t from-darkbg z-1 to-transparent absolute left-0 w-full bottom-0 h-32"></div>
      </div>
    </>
  );
};
// fahisayub.github.io
// dineshjangid03.github.io

export default Home;
