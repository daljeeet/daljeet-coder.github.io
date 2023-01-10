import React, { useState } from 'react'
import Soft from './softskills/Soft';
import TechSkills from './techSkills/TechSkills';

const Skills = () => {
  const [tech, setTech ] = useState(true);
  // const [skills, setSkills ] = useState(false);

  const handleTech = ()=>{
   setTech(true)
  }
  const handleSoft = ()=>{
 setTech(false)
  }

  return (
    <div id='skills' className=' w-full md:w-5/6 mt-20 md:mt-10 m-auto text-center py-10' >
        <h1 className='mb-10 text-4xl'>Skills</h1>
        <div className='flex' >
          <div className='flex w-full flex-col'>
            <div className='flex justify-around' >
          <h4 className={`cursor-pointer m-2 h-8 rounded-xl overflow-hidden ${tech?'animate-bounce repeat-1 border-lightbg border-b-2':""} px-4`} onClick={handleTech} >Technical Skills</h4>
          <h4 className={`cursor-pointer m-2 h-8 overflow-hidden rounded-xl ${!tech?'animate-bounce repeat-1 border-lightbg border-b-2':""} px-4`} onClick={handleSoft} >Other Skills</h4>
            </div>

          <div className={`w-full h-fit`} >
            <div className={`${tech?"w-full mt-4 m-auto":"hidden"}`} >
            <TechSkills />
            </div>
            <div className={`${!tech?"w-full m-auto animate-in slide-in-from-bottom-20 duration-1000":"hidden"}`} >
            <Soft />
            </div>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default Skills