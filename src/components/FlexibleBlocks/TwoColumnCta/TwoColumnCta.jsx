import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TwoColumnCta = data => {
  const image = getImage(data.image.localFile)
  return (
    <section className="relative bg-gray-100">
      <div className="container py-12 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="flex-1 lg:max-w-xl">
          <p className="text-sm font-semibold leading-none text-red-500 uppercase">{data.subheading}</p>
          <h2 className="mt-2 text-4xl font-semibold leading-none">{data.heading}</h2>
          <div className="mt-4 text-gray-700" dangerouslySetInnerHTML={{__html: data.text}}></div>
          <div className="flex mt-6">
            <Link
              className="block w-auto px-6 py-4 text-sm font-semibold leading-none text-center text-white transition duration-200 bg-red-500 shadow-md focus:outline-none hover:bg-red-600"
              to={data.button.url}
            >
              {data.button.title}
            </Link>
          </div>
        </div>
        {data.image && (
          <div className="flex-1 order-first lg:order-last mb-8 lg:mb-0 block lg:ml-16">
          <div className="relative flex">
            <div className="w-full">
              <GatsbyImage image={image} alt="" />
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default TwoColumnCta
