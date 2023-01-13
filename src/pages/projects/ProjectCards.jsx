import React from "react";
import "./project.css";
import { AiFillApple } from "react-icons/ai";
const ProjectCards = ({ largeScreen, name }) => {
  return (
    <>
      <div className="relative w-full pb-10 my-10">
        <div className="relative w-[39rem] h-96">
          <div className="outer hidden md:block h-80 w-[32rem] p-5 pb-9 overflow-hidden shadow-[20px_25px_20px] shadow-darkbg  rounded-xl bg-macLight z-10">
            <div className="frame z-0 before:absolute before:p-6">
              <div >
                <img src={largeScreen} alt="" className="z-10 projectImg"/>
              </div>
            </div>
            <div className="w-3 h-3 rounded-full bg-gray-800 absolute top-1 left-[40%] z-10"></div>
            <div className="w-20 h-24 absolute bottom-0 flex flex-col justify-between left-[36%]">
              <AiFillApple className="text-xl text-darkbg m-auto mt-2" />
              <div className="bg-macLight h-2/3 shadow-[20px_25px_20px] shadow-darkbg "></div>{" "}
            </div>
            <div className="bg-macLight shadow-[20px_25px_20px] shadow-darkbg absolute bottom-0 h-6 w-[8.8rem] left-[31%] rounded-md"></div>
          </div>
          {/* mobile */}
          <div className="h-96 sm:w-[18rem] border-8 shadow-[20px_25px_20px] shadow-darkbg overflow-hidden border-macLight md:w-[8.8rem] rounded-2xl md:absolute left-[70%] bottom-0 md:h-64" >
            <div className="md:absolute left-[30%] w-[40%] h-3 bg-darkbg rounded-md m-auto"></div>
            <img className="h-full" src="https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
