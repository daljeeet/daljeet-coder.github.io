/* eslint-disable react-hooks/exhaustive-deps */
import "../../styling/hero.css";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
  },[]);
  return (
    <div className="w-full flex flex-col h-11/12 overflow-hidden align-center items-center ">
      <div className="relative text-center h-10 w-5/6 mt-2" >
      <p data-aos="fade-down" data-aos-offset="200" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className={`font-bold text-darkbg tracking-wide absolute md:left-[30%] top-[4%] color-gray-500 text-lg before:content-[attr(before-all)] before:absolute before:overflow-hidden before:whitespace-nowrap before:max-w-full before:text-fontcolor before:animate-loading`}
        before-all="I am Daljeet Singh"
        >
       I am Daljeet Singh
      </p>
        </div>
      <div className="set w-5/6 m-auto mt-2">
        <p data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out" className="text-fontcolor md:font-semibold text-sm">MERN stack Developer with Ability to learn and collaborate in Rapidly changing environments and compositions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
