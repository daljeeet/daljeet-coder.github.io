import React from 'react'
import {data} from './ProjectData'
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import ProjectCards from './ProjectCards';
const ProjectDetails = () => {
  return (
      <>
    
    {
        data?.map((el,id)=><div key={id} className="w-full flex flex-col flex-wrap lg:flex-row justify-between items-center border-b-darkbg border-b-4 rounded-2xl mb-4 ">
            <ProjectCards largeScreen={el.dskImg} mobile={el.mobImg} />
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="md:min-w-[26rem]  md:w-1/3 rounded-xl bg-gradf/40 lg:mb-20 p-2 sm:p-10 shadow-[20px_25px_40px] shadow-darkbg"
            >
              <h3 className="text-2xl m-auto text-center border-darkbg border-b-4 pb-2 mb-6 w-5/6 ">
                {el.name}
              </h3>
              <h3 className='font-semibold' > Features :</h3>
              <ul className="list-disc pl-3 sm:text-sm">
                {el.features.map((e,id)=><li key={id} >{e}</li>)}
              </ul>
              <h3 className='font-semibold mt-4'>Teach-Stack : </h3>
              <div className='mt-2 flex flex-wrap font-semibold gap-4'>
                {el.tackstack.map((e,id)=><div key={id} className='mx-2 px-2  border-[1px] border-black bg-darkbg w-fit' >{e} </div>)
                  
                }
              </div>
              <div className="flex justify-between w-5/6 mt-8 m-auto flex-wrap">
                <a
                  href={el.github}
                  target="_blank"
                  className=" px-6 rounded-2xl bg-mac py-1 my-2 flex items-center border-[1px] border-[1px] border-fontcolor hover:shadow-[5px_5px_6px] hover:shadow-fontcolor"
                  rel="noreferrer"
                >
                  <AiFillGithub className="mr-2" /> Github
                </a>
                <a
                  href={el.website}
                  target="_blank"
                  className=" px-6 rounded-2xl py-1 my-2 flex items-center border-[1px] border-fontcolor hover:shadow-[-2px_5px_6px] hover:shadow-fontcolor hover:animate-"
                  rel="noreferrer"
                >
                  <CgWebsite className="mr-2" /> Webiste
                </a>
              </div>
            </div>
    </div>)
    }
     </>
  )
}

export default ProjectDetails