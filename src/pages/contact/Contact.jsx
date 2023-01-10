/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ContactDtl from "./ContactDtl";
import SuggForm from "./SuggForm";
const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gradient-to-b from-darkbg via-lightbg to-darkbg m-auto my-20 p-0 md:p-8 ">
      <h2 className="m-auto text-center my-10 text-3xl "> Contact Me </h2>
      <div className="flex flex-col lg:flex-row align-center justify-around ">
        <div className="w-full md:w-5/6 m-auto lg:m-0 lg:pr-8">
        <ContactDtl/>
        </div>
        <div className="w-full md:w-5/6 m-auto lg:m-0 mt-10 lg:mt-auto " >
          <SuggForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
