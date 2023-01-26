/* eslint-disable jsx-a11y/alt-text */
// import ProjectCards from "./ProjectCards";
// import { CgWebsite } from "react-icons/cg";
// import { AiFillGithub } from "react-icons/ai";
import underline from "../../images/underline.svg";
import ProjectDetails from './ProjectDetails';
const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full md:w-11/12 overflow-hidden m-auto flex-col text-center over-flow-hidden "
    >
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-fit m-auto px-8 mb-6"
      >
        <h1 className="mb-2 text-4xl">My Projects</h1>
        <div className="">
          {" "}
          <img src={underline} alt="" className="" />{" "}
        </div>
      </div>
      <div className="relative py-20">
        <div className="w-60 h-60 absolute top-[-3rem] z-0 md:left-20 rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
        <div className="w-60 h-60 absolute bottom-[-2rem] z-0 md:right-20 rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
        <div className="cards bg-lightbg  rounded-2xl py-8 px-8 text-left origin-center">
          <ProjectDetails/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
