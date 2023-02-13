import React from "react";
import underline from "../../images/underline.svg";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  const skillData = [
    {img:"https://user-images.githubusercontent.com/80110392/210499593-ca8b2ba2-c9c1-40d9-b358-a99e3ab2b4bc.svg",
    animate:"fade-up",
    content:"Build Over 50 various Porjects",
    name:'HTML5'},
    {img:"https://user-images.githubusercontent.com/80110392/210498458-d17c5a52-f76d-4f2e-b00e-fe52dca02313.svg",
    animate:"fade-down",
    content:"Used in all Porjects",
    name:'CSS3'},
    {img:"https://user-images.githubusercontent.com/80110392/210498475-7c5470b5-9ac0-49fc-a086-100f5abf8733.svg",
    animate:"fade-up",
    content:"over 1500+ hours Practice in",
    name:'javaScript'},
    {img:"https://user-images.githubusercontent.com/80110392/210501305-35907fe5-ffb0-4feb-ab44-cff59dabc865.svg",
    animate:"fade-down",
    content:"Used for State Manegement",
    name:'Redux'},
    {img:"https://user-images.githubusercontent.com/80110392/210502706-9c859b39-3d3b-4a09-8676-f466af060b6c.svg",
    animate:"fade-up",
    content:"Used for Data-Base in Backend Projects",
    name:'MongoDB'},
    {img:"https://user-images.githubusercontent.com/80110392/212751832-e5077340-d488-4a5c-bcd0-6e0e2dde1c4c.svg",
    animate:"fade-down",
    content:"Used for Building Backend Projects",
    name:'Express JS'},
    {img:"https://user-images.githubusercontent.com/80110392/210498509-583509e4-6fba-44c5-9c62-2550b3c03a1e.svg",
    animate:"fade-up",
    content:"Used React for building Most of my Projects",
    name:'React JS'},
    {img:"https://user-images.githubusercontent.com/80110392/210502766-3387da2b-a991-4858-b206-d65a83732f12.svg",
    animate:"fade-down",
    content:"Used in My Backend Projects",
    name:'Node JS'},
  ]
  const toolsData = [
    {img:"https://user-images.githubusercontent.com/80110392/210502839-ba898ed3-d33a-4b01-a554-15e3d25c9b9d.svg",
    animate:"fade-up",
    content:"Used in most of my Projects",
    name:'tailwind CSS'},
    {img:"https://user-images.githubusercontent.com/80110392/210503032-817da1a7-f7c8-4d59-b6c0-6a7e5270ca38.svg",
    animate:"fade-down",
    content:"Build Some of my Projects using typescript",
    name:'typeScript'},
    {img:"https://user-images.githubusercontent.com/80110392/210502569-a5c19368-14c3-473b-829c-fbb050b42f4e.svg",
    animate:"fade-up",
    content:"Used Figma For Designing UI of Projects",
    name:'Figma'},
    {img:"https://user-images.githubusercontent.com/80110392/215558264-4d43f9d9-ba83-484e-8db2-c39e7153aca8.svg",
    animate:"fade-down",
    content:"Used in Building Some of my Projects",
    name:'Next JS'},
    {img:"https://user-images.githubusercontent.com/80110392/215560746-56d7806f-0fc6-4b5a-b146-1da4634d483a.png",
    animate:"fade-up",
    content:"Used Cypress Testing Library To test Code",
    name:'Cypress'},
    {img:"https://user-images.githubusercontent.com/80110392/212755675-e84111db-edb8-4822-867d-510f2e200836.svg",
    animate:"fade-down",
    content:"Confident in VS-Code for Writing Code",
    name:'VS Code'},
    {img:"https://user-images.githubusercontent.com/80110392/212755766-c018bee3-35ca-448c-82de-66903a42e042.svg",
    animate:"fade-up",
    content:"Used npm for managing packeges",
    name:'NPM'},
    {img:"https://user-images.githubusercontent.com/80110392/215564304-cccfe7c4-e2b5-479e-addb-4d887f34f27b.png",
    animate:"fade-down",
    content:"Used Chakra Comopnents in Various Projects",
    name:'Chakra UI'},
  ]
  return (
    <div
      id="skills"
      className=" w-full md:w-5/6 mt-20 md:mt-10 m-auto text-center py-6"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-fit m-auto px-8 mb-6"
      >
        <h1 className="mb-2 text-4xl">My Skills</h1>
        <div className="">
          <img src={underline} alt="" className="" />
        </div>
      </div>
      <div className="relative ">
        <div className="w-80 h-80 absolute top-[-5rem] z-0 md:left-[-5rem] rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
        <div className="w-80 h-80 absolute bottom-[-5rem] z-0 md:right-[-5rem] rounded-full bg-gradient-to-r from-gradf/20 to-grads/30 blur-3xl"></div>
        <div className="bg-lightbg p-10 z-10 rounded-2xl">
          <h3 className="mb-8 border-b-2 w-fit ml-10 px-2 rounded-md">
            Language & Tools :
          </h3>
          <div
            className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-5"
            >
              {skillData.map((el,id)=><SkillsCard key={id} data={el} />)}
          </div>
          <h3 className="my-8 border-b-2 w-fit ml-20 px-2 rounded-md">
            Other Tools :
          </h3> 
          <div
            className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-y-8 gap-x-5"
            >
              {toolsData.map((el,id)=><SkillsCard key={id} data={el} />)}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Skills;
