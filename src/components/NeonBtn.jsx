import React from 'react'
import '../styling/button.css'
import {FiDownload} from "react-icons/fi"
const NeonBtn = ({text}) => {
  return (
    <button className={`neon border-2 ml-2 md:border-none border-lightbg rounded-lg relative overflow-hidden flex py-1 px-2 font-md`} >
        <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
     <FiDownload className='mx-2'/> {text}</button>
  )
}

export default NeonBtn