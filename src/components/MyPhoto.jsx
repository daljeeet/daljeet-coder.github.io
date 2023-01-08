import React from 'react'
import '../styling/photo.css'
const MyPhoto = () => {
  return (
           <div className="box relative h-52 w-52 md:w-80 md:h-80 rounded-full overflow-hidden before:content-[''] before:absolute after:bg-lightbg before:bg-gradient-to-r from-gradf to-grads ">
        <div className="box-content">
            <div className="box-content-front">
            </div>
          <img src="https://user-images.githubusercontent.com/80110392/211195442-0bc44d6e-3f71-4713-a540-80674e238e67.png" alt='asdf' />
        </div>
    </div>
  )
}

export default MyPhoto