import React from 'react'
import '../styling/waves.css'
const WaveBg = () => {
  return (
    <div>
        
<div className="header">

{/* <!--Content before waves--> */}
<div className="inner-header flex">
{/* <h1>Simple CSS Waves</h1> */}
</div>

{/* <!--Waves Container--> */}
<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x={8} y={0} fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x={48} y={7} fill="#D7EBFF" />
        </g>
      </svg>
    
</div>

</div>

<div className="content flex">
  {/* <p>By.Goodkatz | Free to use </p> */}
</div>
    </div>
  )
}

export default WaveBg