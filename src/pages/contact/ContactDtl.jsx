/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPhonePortrait} from "react-icons/io";
import {TfiLinkedin} from 'react-icons/tfi'
import {TfiTwitterAlt} from 'react-icons/tfi'
import {VscGithub} from 'react-icons/vsc'
import {IoLogoWhatsapp} from 'react-icons/io'



const ContactDtl = () => {
  return (
    <div className="flex bg-black/20 flex-col w-full border-2 shadow-xl items-center border-darkbg p-2 rounded-xl ">
      <h3 className="w-fit my-8 border-b-2 border-darkbg text-xl p-2 text-center">
        Have an Idea, or a Project to Discuss? <br />
        Reach Out to me.
      </h3>
      <div className="w-full px-6" >
        <div className="flex justify-center items-center my-2 text-base ">
          <a
            href="#"
            target="_blank"
            className=" mr-6 text-darkbg text-4xl my-2"
          >
            <IoLocationSharp className="text-fontcolor" />
          </a>
          <h5 className="sm:w-11/12 md:w-1/2 text-center text-sm sm:text-md">Nainital, Uttrakhand</h5>
        </div>
        <div className="flex justify-center items-center my-2 text-base">
          <a
            href="#"
            target="_blank"
            className="mr-6 text-darkbg text-4xl my -2"
          >
            <IoMail className="text-fontcolor" />
          </a>
          <h5 className="sm:w-11/12 md:w-1/2 text-center text-sm sm:text:base ">daljeetsingh.chamiyal@gmail.com</h5>
        </div>
        <div className="flex justify-center items-center my-2 text-base ">
          <a
            href="#"
            target="_blank"
            className=" mr-6 text-darkbg text-4xl my-2"
          >
            <IoIosPhonePortrait className="text-fontcolor" />
          </a>
          <h5 className="sm:w-11/12 md:w-1/2 text-center text:sm sm:text:base "> +91-8954379385 </h5>
        </div>
      </div>
      <div className="w-full my-4 py-4 flex justify-evenly" >
        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/daljeet-singh-61250723a">
        <TfiLinkedin className="mx-4 text-3xl cursor-pointer"/> </a>
        <a href="https://github.com/daljeet-coder"target="_blank" rel='noreferrer' >
        <VscGithub className="mx-4 text-3xl cursor-pointer"/>
        </a>
        <a href="https://twitter.com/D_s_champ"target="_blank" rel='noreferrer' >
        <TfiTwitterAlt className="mx-4 text-3xl cursor-pointer"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=8954379385&text=hey,%20thanks%20for%20your%20message.%20I%20will%20get%20back%20to%20you%20ASAP"target="_blank" rel='noreferrer' >
        <IoLogoWhatsapp className="mx-4 text-3xl cursor-pointer"/>
        </a>
      </div>
    </div>
  );
};

export default ContactDtl;
