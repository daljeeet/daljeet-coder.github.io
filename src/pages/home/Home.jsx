import React from "react";
import WaveBg from "../../components/WaveBg";
import Hero from "./Hero";
import "../../styling/hero.css";
import MyPhoto from "../../components/MyPhoto";
import Book from "../../Book/Book";
import { useState } from "react";
const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="w-full h-fit md:h-screen md:overflow-hidden relative"
        id="home"
      >
        <div className="w-5/6 z-10 pt-20 overflow-hidden m-auto relative md:h-full flex justify-between items-center flex-col md:flex-row ">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:w-1/2 pb-4 z-10 text-center "
          >
            <h1 className="headding text-4xl my-4 tracking-wider">Namaste..</h1>
            <div className="bg-black/10 flex flex-col justify-center items-center pb-4 z-10 text-center rounded-xl">
              <Hero />
              {/* Neon Effect Button  */}

              <div className="mt-10 flex m-auto w-5/6 justify-around ">
                <button
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className={`neon  bg-gradf rounded-lg relative overflow-hidden py-1 px-2 text-black`}
                >
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <span className="absolute block"></span>
                  <div className="flex px-2 font-semibold text-lg">
                    <p onClick={() => setToggle(true)} className="text-white">
                      My work...
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex justify-center items-center md:w-2/5 w-5/6 z-10 "
          >
            <MyPhoto />
          </div>
        </div>
        <div className="absolute left-0 top-0 right-0 z-0 ">
          <WaveBg />
        </div>
      </div>
      <div
        onClick={() => setToggle(false)}
        className={`fixed w-screen h-screen left-0 right-0 top-0 bg-black/50 z-10 ${
          toggle ? "flex animate-in zoom-in" : "hidden"
        } `}
      >
        <div className="w-1/2 m-auto mt-2 flex justify-center items-center box-border z-100">
          <Book />
        </div>
      </div>
    </>
  );
};
// fahisayub.github.io
// dineshjangid03.github.io

export default Home;
