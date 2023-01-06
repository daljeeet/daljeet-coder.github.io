import React from 'react'

const TechSkills = ({skill,percentage,width}) => {
  return (
    <div className='flex w-full my-2'>
            <h5 className='w-1/5' >{skill}</h5> <div className={`bg-lightbg relative rounded-full mx-4 w-72`} > <div className={`${width} border-[6px] rounded-full`} ></div> </div> <span>{percentage}</span>
            </div>
  )
}

export default TechSkills