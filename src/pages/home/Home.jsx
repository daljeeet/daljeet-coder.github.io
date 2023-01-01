import React from "react";
import welImg from "../../images/welcome.png";
import WaveBg from "../../components/WaveBg";
import Hero from "./Hero";
import "../../styling/hero.css";
// import NeonBtn from '../../components/NeonBtn'
import { BsDownload } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <div className="w-full relative" id="home">
        <div className="w-5/6 pt-14 overflow-hidden m-auto relative bg-lightbg h-screen rounded-3xl md:flex justify-between items-center ">
          <div className="w-1/2 z-10 text-center">
            <h1 className="headding">Nameste...</h1>
            <Hero />
            {/* Neon Effect Button  */}

            <div className="mt-10">
              <button
                className={`neon ml-10 rounded-xl relative overflow-hidden py-1 px-2 text-black`}
              >
                <span className="absolute block"></span>
                <span className="absolute block"></span>
                <span className="absolute block"></span>
                <span className="absolute block"></span>
                <h4 className="flex px-2 font-semibold text-lg">
                  <BsDownload className="mr-3" />
                  Resume
                </h4>
              </button>
            </div>
          </div>
          <div className="w-1/2 z-10 ">
            <img src={welImg} alt="welcome" />
          </div>
        </div>
        <div className="absolute left-0 top-0 right-0 z-0">
          <WaveBg />
        </div>
        <div className="bg-gradient-to-t from-darkbg to-transparent absolute left-0 w-full bottom-0 h-32"></div>
      </div>
    </>
  );
};
// fahisayub.github.io
// dineshjangid03.github.io

export default Home;
