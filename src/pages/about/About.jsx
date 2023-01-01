import React from 'react'
import my_photo from '../../images/Profile.jpg'
const About = () => {
  return (
    <div id='about' className='w-5/6 m-auto text-center border-2 mt-32 p-4' >
        <h1>About Me </h1>
        <div className='flex items-center ' >
      <div className='w-1/4' >
        <img src={my_photo} alt="about me p" className='rounded-full' />
      </div>
       <div className='w-3/4 flex flex-col justify-center'>
        <p className='text-gray-200 font-semibold w-5/6 my-6'>MERN stack Developer with Ability to learn and collaborate in Rapidly changing environments and compositions. Fast Learner having 1500+ hours coding Bootcamp strecture of JavaScript, React, Html, CSS, TypeScript, Node, Express, MongoDB and more. </p>
        <div className='flex w-5/6' >
          <h4 className='mx-12'>Technical Skills</h4>
          <h4>Soft Skills</h4>
        </div>
       </div>
        </div>
    </div>
  )
}

export default About