import { useEffect, useState } from 'react';
import '../../../styling/tech.css'
import SkillHtml from './SkillHtml';
const TechSkills = () => {
const [skill, setSkill] = useState("")

useEffect(() => {
const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
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
  switch (e.target.innerText) {
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
      
    default:
      return setSkill('html')
  }
}
console.log(skill)
  return (
  <div className='sparent box-border '>
  <div className='parent h-20'>
  <menu className="menu m-0 md:flex w-5/6 relative items-center justify-center p-2 rounded-md bg-darkbg">
    <button onClick={handleSkill} className="menu__item active" style={{bgColorItem:"#ff8c00"}} >
      HTML
    </button>
    <button onClick={handleSkill} className="menu__item">
      CSS
    </button>

    <button onClick={handleSkill} className="menu__item " style={{bgColorItem: "#4343f5"}} >
      JavaScript
    </button>

    <button onClick={handleSkill} className="menu__item" style={{bgColorItem: "#e0b115"}} > 
        React
    </button>

    <button onClick={handleSkill} className="menu__item" style={{bgColorItem:"#65ddb7"}}>
   
      Redux
    </button>

    <div className="menu__border"></div>

  </menu>
  <div className="svg-container">
    <svg viewBox="0 0 202.9 45.5" >
      <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
        <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
      </clipPath>
    </svg>
  </div>
  </div>
  {(skill==="html")&&<SkillHtml/>}
  </div>
  )
}

export default TechSkills