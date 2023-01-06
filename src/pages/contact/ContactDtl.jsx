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
    <div className="flex flex-col w-full border-2 border-darkbg p-2 rounded-xl ">
      <h3 className="w-fit my-8 border-b-2 border-darkbg text-xl p-2 ">
        Have an Idea, or a Project to Discuss? <br />
        Reach Out to me.
      </h3>
      <div className="w-full px-6" >
        <div className="flex my-2 text-base ">
          <a
            href="#"
            target="_blank"
            className=" mx-8 text-darkbg text-4xl my-2"
          >
            <IoLocationSharp />
          </a>
          <h5 className="w-5/6 text-left text-md">Nainital, Uttrakhand</h5>
        </div>
        <div className="flex my-2 text-base ">
          <a
            href="#"
            target="_blank"
            className=" mx-8 text-darkbg text-4xl my -2"
          >
            <IoMail />
          </a>
          <h5 className="w-5/6 text-left ">daljeetsingh.chamiyal@gmail.com</h5>
        </div>
        <div className="flex my-2 text-base ">
          <a
            href="#"
            target="_blank"
            className=" mx-8 text-darkbg text-4xl my-2"
          >
            <IoIosPhonePortrait />
          </a>
          <h5 className="w-5/6 text-left "> +91-8954379385 </h5>
        </div>
      </div>
      <div className="w-full my-4 py-4 flex" >
        <TfiLinkedin className="mx-4 text-3xl cursor-pointer"/>
        <VscGithub className="mx-4 text-3xl cursor-pointer"/>
        <TfiTwitterAlt className="mx-4 text-3xl cursor-pointer"/>
        <IoLogoWhatsapp className="mx-4 text-3xl cursor-pointer"/>
      </div>
    </div>
  );
};

export default ContactDtl;
