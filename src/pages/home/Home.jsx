import React from "react";
import WaveBg from "../../components/WaveBg";
import Hero from "./Hero";
import "../../styling/hero.css";
import { Link } from "react-scroll";
import MyPhoto from "../../components/MyPhoto";
import NeonBtn from "../../components/NeonBtn";
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
 
              <div className="mt-10 flex m-auto w-5/6 justify-around ">
                <button
                  className={`neon  bg-gradf rounded-lg relative overflow-hidden py-1 px-2 text-black`}
                >
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <p className="flex px-2 font-semibold text-lg">
                    <Link
                    className="text-white"
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
                <div className={`neon bg-gradf rounded-lg overflow-hidden py-1 px-2 text-black`}>
                <NeonBtn text={"Resume"} color={"white"} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:w-2/5 w-5/6 z-10 ">
            <MyPhoto/>
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
