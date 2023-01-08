import React, { useState } from 'react'
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
    <div id='skills' className='w-5/6 border-2 m-auto text-center py-10' >
        <h1 className='mb-10 text-4xl'>Skills</h1>
        <div className='flex' >
          <div className='flex w-full flex-col'>
            <div className='flex' >
          <h4 className={`cursor-pointer m-2 h-8 ${tech?'border-b-2':""} px-4`} onClick={handleTech} >Technical Skills</h4>
          <h4 className={`cursor-pointer m-2 h-8 ${!tech?'border-b-2':""} px-4`} onClick={handleSoft} >Soft Skills</h4>
            </div>

          <div className={`w-full border-2 h-80`} >
            <div className={`${tech?"w-full m-auto":"hidden"}`} >
            <TechSkills skill={'Redux'} percentage="90%" width='w-11/12'/>
            </div>
            <div className={`${!tech?"":"hidden"}`} >
            <ul className='' >
              <li className='my-2' >Communication Skills</li>
              <li className='my-2' >Zoom Merathon Holder</li>
              <li className='my-2' >Team Lead In various Projects</li>
              <li className='my-2' >100+ hours of Soft Skills BootCamp</li>
              <li className='my-2' >...</li>
              <li className='my-2' ></li>
            </ul>
            </div>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default Skills