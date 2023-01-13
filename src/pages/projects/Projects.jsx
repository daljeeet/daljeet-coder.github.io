/* eslint-disable jsx-a11y/alt-text */
import cultfitImg from "../../images/cultfit.png";
import dpdzines from "../../images/dpdzines.png";
import engage from "../../images/engage.png";
import ProjectCards from "./ProjectCards";
import movieapp from "../../images/movieapp.png";
import mailchimp from "../../images/mailchimp.png";
const Projects = () => {
  return (
    <div
      id="projects"
      className="w-11/12 border-2 overflow-hidden m-auto flex-col text-center over-flow-hidden "
    >
      <h1 className='my-10 text-4xl'>Projects</h1>
      <div className="cards bg-lightbg  rounded-2xl py-4 px-8 text-left origin-center">
        <div className="flex flex-col border-2 lg:flex-row justify-between items-center ">
          <ProjectCards largeScreen={cultfitImg} />
          <div className="w-full p-2">
            <div>

            </div>
            <h3>Cult Fit - Clone</h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <ProjectCards largeScreen={dpdzines} name="dpDzines.com" />
            <div className="w-full p-2">
            <div>
            </div>
            <h3>DPdzines.com</h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <ProjectCards largeScreen={engage} name="Engagebay.com -clone" />
            <div className="w-full p-2">
            <div>
            </div>
            <h3>Engagebay.com - Clone</h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <ProjectCards largeScreen={movieapp} name="Engagebay.com -clone" />
            <div className="w-full p-2">
            <div>

            </div>
            <h3>Hotstar - Clone</h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <ProjectCards largeScreen={mailchimp} name="Engagebay.com -clone" />
            <div className="w-full p-2">
            <div>

            </div>
            <h3>MailChimp - Clone</h3>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
