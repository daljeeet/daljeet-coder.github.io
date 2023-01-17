/* eslint-disable jsx-a11y/alt-text */
import cultfitImg from "../../images/cultfit.gif";
import dpdzines from "../../images/dpdzines.gif";
import engage from "../../images/engage.png";
import ProjectCards from "./ProjectCards";
import movieapp from "../../images/movieapp.png";
import mailchimp from "../../images/mailchimp.png";
import {CgWebsite} from 'react-icons/cg'
import {AiFillGithub} from 'react-icons/ai'
import underline from '../../images/underline.svg'
const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full md:w-11/12 overflow-hidden m-auto flex-col text-center over-flow-hidden "
    >
      <div className='w-fit m-auto px-8 mb-6' >
        <h1 className='mb-2 text-4xl'>My Projects</h1>
        <div className=''> <img src={underline} alt="" className='' /> </div>
        </div>
        <div className="relative py-20">
          <div className="w-60 h-60 absolute top-[-3rem] z-0 md:left-20 rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
          <div className="w-60 h-60 absolute bottom-[-2rem] z-0 md:right-20 rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
      <div className="cards bg-lightbg  rounded-2xl py-8 px-8 text-left origin-center">
        <div className="w-full  flex flex-col flex-wrap lg:flex-row justify-between items-center border-b-darkbg border-b-4 rounded-2xl mb-4 ">
          <ProjectCards largeScreen={cultfitImg} mobile={"https://user-images.githubusercontent.com/80110392/212766158-9fcf8acd-5761-43f0-9df4-3ce671660a2e.gif"} />
          <div className="md:min-w-[26rem] rounded-xl bg-gray-800/20 lg:mb-20 p-4 sm:p-10 shadow-[20px_25px_40px] shadow-darkbg">
            <h3 className="text-2xl m-auto text-center border-darkbg border-b-4 pb-2 mb-6 w-5/6 ">Cult Fit - Clone</h3>
            <ul className="list-disc pl-3 sm:text-sm" >
              <li>Cultfit- a website which deals in zym and fitness</li>
              <li>Individual Project</li>
              <li>Completed in 5 days</li>
              <li>Used React for development</li>
              <li>Used Chakra UI for Designing</li>
            </ul>
            <div className="flex justify-between w-5/6 mt-8 m-auto flex-wrap">
            <a href="https://github.com/daljeet-coder/getFit.com-Clone" target='_blank'  className=" px-6 rounded-2xl bg-blue-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"><AiFillGithub className="mr-2" /> Github</a>
            <a href="https://getfitt-22qn418r6-daljeet-coder.vercel.app/" target='_blank'  className=" px-6 rounded-2xl bg-green-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"> <CgWebsite className="mr-2"/> Webiste</a>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap lg:flex-row justify-between items-center border-b-darkbg border-b-4 rounded-2xl mb-4 ">
          <ProjectCards largeScreen={dpdzines} mobile={"https://user-images.githubusercontent.com/80110392/212767005-4f30c7f9-e0f1-4bcc-ae55-a6238636d72a.gif"} />

          <div className="md:min-w-[26rem] rounded-xl bg-gray-800/20 lg:mb-20 p-4 sm:p-10 shadow-[20px_25px_40px] shadow-darkbg">
            <h3 className="text-2xl m-auto text-center border-darkbg border-b-4 pb-2 mb-6 w-5/6 ">DP-dzines.com</h3>
            <ul className="list-disc pl-3 sm:text-sm" >
              <li>DP-dzines Provides Home interior Decoration Services</li>
              <li>Individual Project</li>
              <li>Completed in 15 days approx</li>
              <li>Used React for development</li>
              <li>Used CSS and Other Libraryes for Designing</li>
            </ul>
            <div className="flex justify-between w-5/6 mt-8 m-auto flex-wrap">
            <a href="https://github.com/daljeet-coder/dpdzines.com" target='_blank'  className=" px-6 rounded-2xl bg-blue-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"><AiFillGithub/> Github</a>
            <a href="https://dpdzines-com.vercel.app/#home" target='_blank' className=" px-6 rounded-2xl bg-green-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"> <CgWebsite className="mr-2"/> Webiste</a>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap lg:flex-row lg:justify-between items-center border-b-darkbg border-b-4 rounded-2xl mb-4 ">
          <ProjectCards largeScreen={engage} />
          <div className="md:min-w-[26rem] rounded-xl bg-gray-800/20 lg:mb-20 p-4 sm:p-10 shadow-[20px_25px_40px] shadow-darkbg">
            <h3 className="text-2xl m-auto text-center border-darkbg border-b-4 pb-2 mb-6 w-5/6 ">Engagebay - Clone</h3>
            <ul className="list-disc pl-3 sm:text-sm" >
              <li>Engagebay.com - A Website which Provides <br /> solutions  for managing <br /> and marketing Businesses</li>
              <li>Group Project of Team 4 Developers</li>
              <li>Completed in 5 days</li>
              <li>Used HTML CSS and Javascript for the Development</li>
              <li>Used json rest api for Data</li>
            </ul>
            <div className="flex justify-between w-5/6 mt-8 m-auto flex-wrap">
            <a href="https://github.com/daljeet-coder/Engagebay-clone" target='_blank'  className=" px-6 rounded-2xl bg-blue-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"><AiFillGithub/> Github</a>
            <a href="https://gleeful-praline-8d6d79.netlify.app/" target='_blank' className=" px-6 rounded-2xl bg-green-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"> <CgWebsite className="mr-2"/> Webiste</a>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap lg:flex-row justify-between items-center border-b-darkbg border-b-4 rounded-2xl mb-4 ">
          <ProjectCards largeScreen={movieapp} />
          <div className="md:min-w-[26rem] rounded-xl bg-gray-800/20 lg:mb-20 p-4 sm:p-10 shadow-[20px_25px_40px] shadow-darkbg">
            <h3 className="text-2xl m-auto text-center border-darkbg border-b-4 pb-2 mb-6 w-5/6 ">HotStar - Clone</h3>
            <ul className="list-disc pl-3 sm:text-sm" >
              <li>Hotstar-clone - In this website we can search <br /> for the Movies and their details </li>
              <li>Individual Project</li>
              <li>Completed in 4 days</li>
              <li>Used HTML, CSS and JavaScript</li>
              <li>Used Movie API and debouncing</li>
            </ul>
            <div className="flex justify-between w-5/6 mt-8 m-auto flex-wrap">
            <a href="https://github.com/daljeet-coder/hotstar-clone" target='_blank' className=" px-6 rounded-2xl bg-blue-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"><AiFillGithub/> Github</a>
            <a href="https://ornate-kleicha-56c2f7.netlify.app/" target='_blank'  className=" px-6 rounded-2xl bg-green-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"> <CgWebsite className="mr-2"/> Webiste</a>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap lg:flex-row justify-between items-center border-b-darkbg border-b-4 rounded-2xl mb-4 ">
          <ProjectCards largeScreen={mailchimp} />
          <div className="md:min-w-[26rem] rounded-xl bg-gray-800/20 lg:mb-20 p-4 sm:p-10 shadow-[20px_25px_40px] shadow-darkbg">
            <h3 className="text-2xl m-auto text-center border-darkbg border-b-4 pb-2 mb-6 w-5/6 ">MailChimp - Clone</h3>
            <ul className="list-disc pl-3 sm:text-sm" >
              <li>MailChimp Provides various web Services,<br /> web hosting and much more </li>
              <li>Individual Project</li>
              <li>Completed in 5 days</li>
              <li>Used HTML, CSS, ans JavaScript</li>
            </ul>
            <div className="flex justify-between w-5/6 mt-8 m-auto flex-wrap">
            <a href="https://github.com/daljeet-coder/mailchimp.com-Clone" target='_blank' className=" px-6 rounded-2xl bg-blue-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"><AiFillGithub/> Github</a>
            <a href="https://melodic-pastelito-61a38c.netlify.app/" target='_blank' className=" px-6 rounded-2xl bg-green-900 py-1 my-2 flex items-center border-[1px]" rel="noreferrer"> <CgWebsite className="mr-2"/> Webiste</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
