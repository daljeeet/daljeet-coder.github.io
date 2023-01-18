import React from 'react'
import '../styling/button.css'
import resume from '../images/Daljeet_Singh_Resume.pdf'
import {FiDownload} from "react-icons/fi"
const NeonBtn = ({text, color='fontcolor'}) => {
  return (
    <button onClick={()=>window.open(resume)} type='submit' download={true} className={`neon border-2 md:border-none border-lightbg rounded-lg relative overflow-hidden flex py-1 px-2 font-md text-${color} `} >
        <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='flex items-center font-semibold'>
        <FiDownload className='mx-2 text-lg' /><a href={resume} download> {text} </a> </span>
     </button>
  )
}

export default NeonBtn