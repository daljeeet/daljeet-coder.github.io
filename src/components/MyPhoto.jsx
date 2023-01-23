import React from "react";
import "../styling/photo.css";
import mypic from '../images/Profile.svg'
const MyPhoto = () => {
  return (
    <div className="box relative h-52 w-52 md:w-80 md:h-80 rounded-full overflow-hidden before:content-[''] before:absolute after:bg-lightbg before:bg-gradient-to-r from-gradf to-grads ">
      <div className="box-content">
        {/* <div className="box-content-front "></div> */}
       <img src={mypic} alt="" />
      </div>
    </div>
  );
};

export default MyPhoto;
