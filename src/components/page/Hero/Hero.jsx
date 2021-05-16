import React from 'react'

const Hero = data => {
  return (
    <div
    className="relative py-16 bg-center bg-cover lg:py-32"
    style={{ backgroundImage: `url(${data?.backgroundImage?.sourceUrl})` }}
    >
    <div className="absolute inset-0 bg-opacity-75 pointer-events-none bg-black"></div>
    <div className="container relative">
    <h1
    className="text-3xl font-bold leading-snug tracking-tight text-center text-white lg:text-right lg:text-5xl"
    dangerouslySetInnerHTML={{ __html: data?.heading }}
    ></h1>
    </div>
    </div>
    )
  }
  
  export default Hero