/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ContactDtl from "./ContactDtl";
import SuggForm from "./SuggForm";
const Contact = () => {
  return (
    <div id="contact" className="w-full bg-lightbg bg-gradient-to-b from-darkbg via-lightbg to-darkbg m-auto my-20 p-8 ">
      <h2 className="m-auto text-center my-10 text-3xl "> Contact Me </h2>
      <div className="flex align-center justify-around ">
        <div className="pr-8">
        <ContactDtl/>
        </div>
        <div className="w-1/2" >
          <SuggForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
