/* eslint-disable react-hooks/exhaustive-deps */
import "../../styling/hero.css";
import React, { useEffect } from "react";
import $ from "jquery";

const Hero = () => {
  useEffect(() => {
    animate();
  },[]);
  let data = "A MERN stack Developer with Ability to learn and collaborate in Rapidly changing environments and compositions."
  let a = 0,
    pArray = data.split('')
  var animate = function () {
    var timeout = setTimeout(function () {
      clearTimeout(timeout);
      if (a === pArray?.length) {
        return false;
      } else {
        $(".set p").append("<span>" + pArray[a] + "</span>");
        a++;
        animate();
      }
    }, 30);
  };
  return (
    <div className="w-100% flex flex-col h-5/6 overflow-hidden align-center items-center ">
      <p
        className={`font-bold color-gray-500 text-lg before:content-[attr(before)] before:absolute before:overflow-hidden before:whitespace-nowrap before:max-w-full before:text-white before:animate-loading my-4`}
        before="I am Daljeet Singh"
      >
       I am Daljeet Singh
      </p>
      <div className="set w-5/6 m-auto mt-4 relative">
        <p className="text-white font-bold text-sm " data-place="MERN stack Developer with Ability to learn and collaborate in Rapidly changing environments and compositions.">
        </p>
      </div>
    </div>
  );
};

export default Hero;
