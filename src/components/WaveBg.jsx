import React from "react";
import "../styling/waves.css";
const WaveBg = () => {
  return (
    <div className="relative">
      <div className="align-center color-gradf bg-gradient-to-r from-gradf to-grads h-5/6">
        <div className="h-[28rem] w-full m-0 p-0 flex justify-center items-center align-center"></div>
        <div className="h-32">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={1}
                fill="rgba(233,211,231,0.75)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(255,255,255,0.50)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.25)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={7}
                fill="rgba(100,100,100,0.1)"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-gradient-to-t from-darkbg z-1 to-transparent bg-white bottom-0 left-0 right-0 md:h-20"></div>
    </div>
  );
};

export default WaveBg;
