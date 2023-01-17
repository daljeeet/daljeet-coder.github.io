import React from 'react'
import underline from '../images/underline.svg'
import img from '../images/img.svg'
const About = () => {
  return (
    <div id='about' className='w-full md:w-5/6 mt-20 md:mt-10 m-auto text-center py-10' >
         <div className='w-fit m-auto px-8' >
        <h1 className='mb-2 text-4xl animate-in slide-in-from-top duration-1000'>About Me</h1>
        <div className=''> <img src={underline} alt="" className='' /> </div>
        </div>
        <div className='relative py-20 '> 
        <div className='w-80 h-80 absolute top-[-5rem] z-0 md:left-[-5rem] rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl' ></div>
        <div className='w-80 h-80 absolute bottom-[-5rem] z-0 md:right-[-5rem] right-0 rounded-full bg-gradient-to-r from-gradf/20 to-grads/30 blur-3xl' ></div>
         <div className='animate-in slide-in-from-bottom duration-1000 bg-lightbg flex md:flex-row flex-col justify-around items-center relative p-20 z-10 rounded-2xl'>
            <div className='md:w-1/2 w-full p-4 md:mb-auto mb-6 '>
                <img src={img} className='w-5/6 m-auto ' alt="" />
            </div>
            <div className='md:w-1/2 w-full bg-black/30 p-3 rounded-md '>
                <p className='w-5/6 text-blue-300 m-auto font-semibold leading-normal'>A passionate, aspiring Fullstack web developer, specializing in MERN Stack. Over 1500 hours of hands on Coding in Masai School building 50+ various Projects and have acquired a strong foundation in the latest web development technologies such as MongoDB, Express.js, React.js, and Node.js.  <br /> excited to put my skills to the test and contribute to the development of cutting-edge web applications.  </p>
            </div>
         </div>
         </div>
    </div>
  )
}

export default About