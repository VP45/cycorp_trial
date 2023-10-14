import React from 'react'
// import Vplay from './Vplay';
const Hero = () => {
    return (
        <div className='flex items-center justify-center h-screen overflow-hidden'>
            <video
    loop
    autoPlay
    muted
    className="w-max h-max object-cover"
  >
    <source
      src="/hero.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
        </div>
    );
}

export default Hero