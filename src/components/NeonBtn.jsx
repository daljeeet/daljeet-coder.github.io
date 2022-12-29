import React from 'react'
import '../styling/button.css'
const NeonBtn = ({text,color='white'}) => {
  return (
    <button className={`neon ml-10 relative overflow-hidden py-1 px-2 text-${color} font-md`} >
        <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      <span className='absolute block' ></span>
      {text}</button>
  )
}

export default NeonBtn