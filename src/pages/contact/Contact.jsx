/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ContactDtl from "./ContactDtl";
import SuggForm from "./SuggForm";
import underline from '../../images/underline.svg'
const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gradient-to-b overflow-hidden from-darkbg via-lightbg to-darkbg m-auto my-20 p-0 md:p-8 ">
     <div className='w-fit m-auto px-8 mb-6' >
        <h1 className='mb-2 text-4xl'>Contact Me</h1>
        <div className=''> <img src={underline} alt="" className='' /> </div>
        </div>
      <div className="flex flex-col lg:flex-row align-center justify-around ">
        <div className="w-full md:w-5/6 m-auto lg:m-0 lg:pr-8">
        <ContactDtl/>
        </div>
        <div className="w-full md:w-5/6 m-auto shadow-[20px_25px_20px] shadow-darkbg lg:m-0 mt-10 lg:mt-auto " >
          <SuggForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
