import React from 'react'
import './skills.css'
const SkillsCard = ({data}) => {
  return (
        <div
        data-aos={data.animate}
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="card flex items-center p-3 justify-center bg-darkbg/60 md:w-40 md:h-40 h-28 w-28 cursor-pointer rounded-xl">
    <img className='md:w-20 md:h-20 w-16 h-16 img duration-200 absolute' src={data.img} alt="" />
  <div className="textBox z-10 opacity-0 hover:opacity-1">
    <p className="text font-bold">{data.name}</p>
    <p className='text-sm '>{data.content}</p>
  </div>
</div>
  )
}

export default SkillsCard