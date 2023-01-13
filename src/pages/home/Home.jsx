import React from "react";
import WaveBg from "../../components/WaveBg";
import Hero from "./Hero";
import "../../styling/hero.css";
import { Link } from "react-scroll";
import MyPhoto from "../../components/MyPhoto";
const Home = () => {
  return (
    <>
      <div className="w-full h-fit md:h-screen md:overflow-hidden relative" id="home">
        <div className="w-5/6 z-10 pt-20 overflow-hidden m-auto relative md:h-full flex justify-between items-center flex-col md:flex-row ">
          <div className="md:w-1/2 pb-4 z-10 text-center ">
            <h1 className="headding text-4xl my-4 tracking-wider">Namaste..</h1>
            <div className="bg-black/10 flex flex-col justify-center items-center pb-4 z-10 text-center rounded-xl">
              <Hero />
              {/* Neon Effect Button  */}
 
              <div className="mt-10 m-auto w-auto ">
                <button
                  className={`neon ml-10 bg-gray-800/30 rounded-lg relative overflow-hidden py-1 px-2 text-black`}
                >
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <p className="flex px-2 font-semibold text-lg">
                    <Link
                    className=""
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={300}
                    >
                      My work...
                    </Link>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:w-2/5 w-5/6 z-10 ">
            <MyPhoto/>
            {/* <img src={welImg} alt="welcome" /> */}
          </div>
        </div>
        <div className="absolute left-0 top-0 right-0 z-0 ">
          <WaveBg />
        </div>
      </div>
    </>
  );
};
// fahisayub.github.io
// dineshjangid03.github.io

export default Home;
