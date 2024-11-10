import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner-pic.png)] bg-cover '
    style={{backgroundSize:"23%" , backgroundPosition: "left 80px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-1 h-[calc(100vh-80px)]'>
        <div className='hidden lg-block'></div>

        <div className='text-[50px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-out-down">I'm</p>
            <p data-aos="zoom-out-down">Faiza</p>
            <p data-aos="zoom-out-down">Anum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero