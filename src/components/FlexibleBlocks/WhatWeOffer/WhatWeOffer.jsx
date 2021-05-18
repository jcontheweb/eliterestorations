import React from "react"
import { Link } from "gatsby"
import ServiceRoutes from './services'

const WhatWeOffer = data => {
  return (
    <section className="relative bg-white">
      <div className="container">
        <div className="flex flex-col flex-wrap items-start py-12 lg:flex-row lg:py-24">
          <div className="grid flex-1 gap-6 mt-8 lg:mt-0 md:gap-8 md:grid-cols-2">
            {ServiceRoutes.map((service, index) => (
              <div key={index} className="flex">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-red-300 bg-opacity-25 rounded shadow-md">
                  {React.createElement(service.thumbnail, {
                    className: "h-8 text-red-500",
                  })}
                </div>
                <div className="ml-3">
                  <p className="font-semibold leading-tight">{service.title}</p>
                  <Link
                    className="block mt-1 text-sm leading-tight text-gray-600 underline transition duration-200 hover:text-red-500"
                    to={service.path}
                    aria-label={`Link to ${service.title}`}
                  >
                    About {service.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 order-first lg:order-last lg:pl-16">
            <p className="text-sm font-semibold leading-none text-red-500 uppercase">{data.subheading}</p>
            <h2 className="mt-2 text-4xl font-semibold leading-none">{data.heading}</h2>
            <div className="mt-3" dangerouslySetInnerHTML={{__html: data.text}}></div>
            <div className="mt-6">
              <Link
                className="inline-flex items-center text-sm text-red-500 transition duration-200 group link--arrow"
                to="/services/carpet-tile"
              >
                <span>List of services</span>
                <svg
                  className="w-8 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
