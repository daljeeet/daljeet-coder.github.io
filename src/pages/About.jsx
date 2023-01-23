import React from "react";
import underline from "../images/underline.svg";
import img from "../images/img.svg";
const About = () => {
  return (
    <div
      id="about"
      className="w-full md:w-5/6  mt-20 md:mt-10 m-auto text-center py-10"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-fit m-auto px-8 "
      >
        <h1 className="mb-2 text-4xl animate-in slide-in-from-top duration-1000">
          About Me
        </h1>
        <div className="">
          {" "}
          <img src={underline} alt="" className="" />{" "}
        </div>
      </div>
      <div className="relative ">
        <div className="w-80 h-80 absolute top-[-5rem] z-0 md:left-[-5rem] rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
        <div className="w-80 h-80 absolute bottom-[-5rem] z-0 md:right-[-5rem] right-0 rounded-full bg-gradient-to-r from-gradf/20 to-grads/30 blur-3xl"></div>
        <div className="bg-lightbg flex md:flex-row flex-col justify-around items-center relative md:p-20 p-3 z-1 rounded-2xl">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:w-1/2 w-full p-4 md:mb-auto mb-6 "
          >
            <img
              src={img}
              className="w-5/6 m-auto border-b-4 rounded-xl border-gradf"
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:w-1/2  w-full bg-gradf/40 p-3 rounded-xl "
          >
            <p className="md:w-5/6 md:py-10 m-auto font-semibold leading-normal">
              A passionate, aspiring Fullstack web developer, specializing in
              MERN Stack. Over 1500 hours of hands on Coding in Masai School
              building 50+ various Projects and have acquired a strong
              foundation in the latest web development technologies such as
              MongoDB, Express.js, React.js, and Node.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
