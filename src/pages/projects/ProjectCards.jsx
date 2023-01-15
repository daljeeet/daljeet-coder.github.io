import React from "react";
import "./project.css";
import { AiFillApple } from "react-icons/ai";
const ProjectCards = ({ largeScreen, mobile }) => {
  return (
    <>
      <div className="relative w-full md:min-w-[34rem] md:w-1/2 pb-10 my-10">
        <div className="outer hidden md:block relative w-[39rem] h-96">
          <div className="outer  h-80 w-[32rem] p-5 pb-9 overflow-hidden shadow-[20px_25px_20px] shadow-darkbg  rounded-xl bg-macLight">
            <div className="frame before:absolute before:p-6">
              <div className="">
                <img src={largeScreen} alt="" className="z-10 projectImg" />
              </div>
            </div>
            <div className="w-3 h-3 rounded-full bg-gray-800 absolute top-1 left-[40%] z-10"></div>
            <div className="w-20 h-24 absolute bottom-0 flex flex-col justify-between left-[36%]">
              <AiFillApple className="text-xl text-darkbg m-auto mt-2 z-10" />
              <div className="bg-macLight h-2/3 shadow-[20px_25px_20px] shadow-darkbg "></div>{" "}
            </div>
            <div className="bg-macLight shadow-[20px_25px_20px] shadow-darkbg absolute bottom-0 h-6 w-[8.8rem] left-[31%] rounded-md"></div>
          </div>
          {/* mobile */}
            <div className=" cursor-pointer z-10 border-8 shadow-[20px_25px_20px] shadow-darkbg overflow-hidden border-macLight md:w-[8.8rem] rounded-2xl md:absolute left-[70%] bottom-0 md:h-64">
              <div className="absolute top-1 left-[30%] w-[40%] h-3 bg-black rounded-full m-auto"></div>
          <div>
              <img
                className="h-full w-full"
                src={
                  "https://user-images.githubusercontent.com/80110392/212401024-484b9df6-27b4-4d6c-87d3-93316d7c3183.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
                {/* for Tablate Screens  */}
        <div className="shadow-[20px_25px_20px] shadow-darkbg hidden md:hidden border-[1.2rem] sm:w-full sm:block rounded-xl h-80 border-macLight border-l-[2rem] " >
          <div className="h-5 w-5 top-[40%] left-[6px] bg-gray-200 shadow-inner rounded-full absolute left-0" ></div>
                <img src={largeScreen} className='w-full h-full' alt="" />
        </div>
                {/* for Mobile Screens  */}
                <div className="border-[.6rem] shadow-[20px_25px_20px] shadow-darkbg overflow-hidden border-macLight hidden xsm:block sm:hidden rounded-2xl left-[70%] bottom-0 md:h-64">
              <div className="absolute top-[1.6rem] left-[30%] w-[40%] h-5 bg-black rounded-full m-auto"></div>
              <img
                className="h-full w-full"
                src={
                  "https://user-images.githubusercontent.com/80110392/212401024-484b9df6-27b4-4d6c-87d3-93316d7c3183.png"
                }
                alt=""
              />
          </div>
      </div>
    </>
  );
};

export default ProjectCards;
