import React from 'react'
import '../styling/button.css'
import {FiDownload} from "react-icons/fi"
const NeonBtn = ({text, color='fontcolor'}) => {
  return ( 
    <button
    onClick={()=>window.open("fw21_0603-Daljeet-Singh-Resume.pdf","_blank")} download='fw21_0603-Daljeet-Singh-Resume.pdf' className={`neon 2 rounded-lg relative overflow-hidden flex py-1 px-2 font-md text-${color} `}
      >
        <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
        <a  className='flex items-center font-semibold' onClick={()=>window.open("fw21_0603-Daljeet-Singh-Resume.pdf","_blank")}  href={"fw21_0603-Daljeet-Singh-Resume.pdf"} target="_blank" rel="noreferrer"  download={'fw21_0603-Daljeet-Singh-Resume.pdf'}> <FiDownload className='mx-2 text-lg' /> {text} </a>
     </button>
  )
}

export default NeonBtn