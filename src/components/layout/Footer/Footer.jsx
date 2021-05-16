import React from "react"
import { Link } from "gatsby"

import Logo from "../../Logo"

const Footer = () => {
  return (
    <footer className="py-16 text-white text-opacity-90 bg-brandBlack">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-center lg:pr-6">
            <Logo />
            <p className="mt-2 text-center text-sm text-gray-400">
              Serving the Four-States for the past 25 years.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-sm font-semibold tracking-wide uppercase">services</h2>
            <ul className="mt-2 text-gray-400">
              {/* {ServiceRoutes.map(route => (
                <li className="relative mb-1 text-center lg:text-left">
                  <Link className="transition duration-200 hover:text-red-500" to={route.path}>{route.title}</Link>
                </li>
              ))} */}
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-sm font-semibold tracking-wide uppercase">customer care</h2>
            <ul className="mt-2 text-gray-400">
              <li className="relative mb-1 text-center lg:text-left">
                <a
                  href="tel:+14178253740"
                  className="transition duration-200 hover:text-red-500"
                >
                  Call us
                </a>
              </li>
              <li className="relative mb-1 text-center lg:text-left">
                <a
                  href={`https://search.google.com/local/writereview?placeid=ChIJIWc3iRtXyIcRaFx0NavFA9U`}
                  target="__blank"
                  className="transition duration-200 hover:text-red-500"
                >
                  Leave a review
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-sm font-semibold tracking-wide uppercase">connect with us</h2>
            <ul className="mt-2 text-gray-400">
              <li className="relative mb-2 text-center lg:text-left">
                <a
                  target="__blank"
                  href="https://www.facebook.com/1EliteSquad/"
                  className="flex transition duration-200 hover:text-red-500"
                >
                  <svg
                    className="w-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                  </svg>
                  <span className="ml-2">EliteRestorations</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
