import { useEffect, useState } from 'react';
import '../../../styling/tech.css'
import HtmlSkills from './HtmlSkills'
import CssSkill from './CssSkill'
import JsSkill from './JsSkill'
import ReduxSkill from './ReduxSkill'
import MongoSkill from './MongoSkill'
import ExpSkills from './ExpSkills'
import ReactSkills from './ReactSkills'
import NodeSkills from './NodeSkills'
const TechSkills = () => {
const [skill, setSkill] = useState("html")

useEffect(() => {
const body = document.body;
const bgColorsBody = ["#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
    menu.style.removeProperty("--timeOut");
    if (activeItem === item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

}, [])
const handleSkill= (e)=>{
  switch (e.target.name) {
    case 'HTML':
      return setSkill('html')
    case 'CSS':
     return setSkill('css')
      
    case 'JavaScript':
     return setSkill('js')
      
    case 'React':
     return setSkill('react')
      
    case 'Redux':
     return setSkill('redux')
    case 'mongo':
     return setSkill('mongo')
    case 'express':
     return setSkill('express')
    case 'node':
     return setSkill('node')
      
    default:
      return setSkill('html')
  }
}
  return (
  <div className='sparent flex md:flex-col'>
  <div className='parent h-fit w-20 md:w-full '>
  <menu className="menu animate-in slide-in-from-bottom-20 duration-1000 h-fit md:h-20 m-0 w-20 md:w-full flex-col md:flex-row md:flex relative items-center justify-center px-4 md:p-2 rounded-md bg-gray-500/20 pt-10 shadow-xl">
    <button onClick={handleSkill} name='HTML' className="menu__item active z-1"  ><img name='HTML' className ='w-10 rounded-full my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/210499593-ca8b2ba2-c9c1-40d9-b358-a99e3ab2b4bc.svg" alt="htmlImage" />
    </button>
    <button onClick={handleSkill} name='CSS' className="menu__item">
    <img name='CSS' className='w-10 rounded-full z-0 my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/210498458-d17c5a52-f76d-4f2e-b00e-fe52dca02313.svg" alt="cssImage" />
    </button>
    <button onClick={handleSkill} name='JavaScript' className="menu__item">
    <img name='JavaScript' className='w-10 rounded-full my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/210498475-7c5470b5-9ac0-49fc-a086-100f5abf8733.svg" alt="javascriptImage" />
    </button>

    <button onClick={handleSkill} name='Redux' className="menu__item" > 
    <img name='Redux' className='w-10 rounded-full my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/210501305-35907fe5-ffb0-4feb-ab44-cff59dabc865.svg" alt="ReactImage" />
    </button>

    <button onClick={handleSkill} name='mongo' className="menu__item" > 
    <img name='mongo' className='w-10 rounded-full my-4 border-[1px] border-darkbg h-10 h-10' src="https://user-images.githubusercontent.com/80110392/210502706-9c859b39-3d3b-4a09-8676-f466af060b6c.svg" alt="MongoDG" />
    </button>

    <button onClick={handleSkill} name='express' className="menu__item" > 
    <img name='express' className='w-10 rounded-full my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/211348353-ad8c2d7b-ddbc-4015-ab41-1525eaf1bfaf.svg" alt="Express" />
    </button>

    <button onClick={handleSkill} name='React' className="menu__item " >
    <img name='React' className='w-10 rounded-full my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/210498509-583509e4-6fba-44c5-9c62-2550b3c03a1e.svg" alt="jsImage" />
    </button>

    <button onClick={handleSkill} name='node' className="menu__item" > 
    <img name='node' className='w-10 rounded-full my-4 border-[1px] border-darkbg h-10' src="https://user-images.githubusercontent.com/80110392/210502766-3387da2b-a991-4858-b206-d65a83732f12.svg" alt="NodeImg" />
    </button>

    <div className="menu__border hidden md:flex left-0 md:top-[99%] w-2 h-1 rounded-full absolute bg-white"></div>

  </menu>
  {/* <div className="svg-container">
    <svg viewBox="0 0 202.9 45.5" >
      <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
        <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
      </clipPath>
    </svg>
  </div> */}
  </div>
  <div className=' md:h-52 mx-auto py-6 w-4/5 md:my-2'>
  {(skill==="html")&&<HtmlSkills/>}
  {(skill==="css")&&<CssSkill/>}
  {(skill==="js")&&<JsSkill/>}
  {(skill==="redux")&&<ReduxSkill/>}
  {(skill==="mongo")&&<MongoSkill/>}
  {(skill==="express")&&<ExpSkills/>}
  {(skill==="react")&&<ReactSkills/>}
  {(skill==="node")&&<NodeSkills/>}
  </div>
  </div>
  )
}

export default TechSkills