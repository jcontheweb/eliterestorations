import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = data => {
  const image = getImage(data.backgroundImage.localFile)

  return (
    <div className="relative py-16 lg:py-32">
      <GatsbyImage image={image} style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }} alt="" />
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