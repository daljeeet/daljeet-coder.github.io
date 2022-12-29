import React from 'react'
import welImg  from '../../images/welcome.png'
import WaveBg from '../../components/WaveBg'
import Hero from './Hero'
import "../../styling/hero.css";
import NeonBtn from '../../components/NeonBtn'
const Home = () => {
  return (
    <>
    <div className='w-full relative' id='home' >
    <div className='w-5/6 pt-14 overflow-hidden m-auto relative bg-lightbg h-screen rounded-3xl md:flex justify-between items-center ' >
        <div className='w-1/2 z-10 text-center' >
          <h1 className='headding' >Nameste...</h1>
            <Hero/>
            <div className='mt-10' >
            <NeonBtn text={'Download Resume'} color='black' />
            </div>
        </div>
        <div className='w-1/2 z-10 ' >
            <img src={welImg} alt="welcome" />
        </div>
    </div>
        <div className='absolute left-0 top-0 right-0 z-0' >
        <WaveBg/> 
        </div>
        <div className='bg-gradient-to-t from-darkbg to-transparent absolute left-0 w-full bottom-0 h-32' ></div>
    </div>
    </>
  )
}
// fahisayub.github.io
// dineshjangid03.github.io

export default Home