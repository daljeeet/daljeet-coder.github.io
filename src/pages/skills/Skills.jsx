import React, { useState } from 'react'
import TechSkills from './TechSkills';

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
    <div id='skills' className='w-5/6 m-auto text-center my-10 py-10' >
        <h1 className='mb-10' >Skills</h1>
        <div className='flex' >
          <div className='w-5/6 flex flex-col'>
            <div className='flex' >
          <h4 className={`cursor-pointer m-2 h-8 ${tech?'border-b-2':""} px-4`} onClick={handleTech} >Technical Skills</h4>
          <h4 className={`cursor-pointer m-2 h-8 ${!tech?'border-b-2':""} px-4`} onClick={handleSoft} >Soft Skills</h4>
            </div>

          <div className={`w-full h-80 `} >
            <div className={`${tech?"":"hidden"}`} >
            <TechSkills skill={'HTML'} percentage="90%" width='w-11/12'/>
            <TechSkills skill={'CSS'} percentage="90%" width='w-11/12' />
            <TechSkills skill={'JavaScript'} percentage="80%" width='w-5/6' />
            <TechSkills skill={'React'} percentage="90%" width='w-11/12' />
            <TechSkills skill={'TypeScript'} percentage="75%" width='w-3/4'/>
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