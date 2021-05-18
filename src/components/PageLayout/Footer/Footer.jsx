import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Logo from "../../Logo"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
    {
      wpMenu(locations: {eq: FOOTER}) {
        id
        menuItems {
          nodes {
            url
            label
          }
        }
      }
      wp {
        siteSettings {
          siteOptions {
            facebookPage
            googlePlaceId
            contactNumber {
              number
            }
          }
        }
      }
    }
  `
  )
  const menuItems = data.wpMenu.menuItems.nodes
  const settings = data.wp.siteSettings.siteOptions

  return (
    <footer className="py-16 pb-24 lg:pb-16 text-white relative text-opacity-90 bg-brandBlack">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-center lg:pr-6">
            <img src="/elite-large-no-bg.png" alt="" />
            {/* <p className="mt-2 text-center text-sm text-gray-400">
              Serving the Four-States for the past 25 years.
            </p> */}
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-sm font-semibold tracking-wide uppercase">services</h2>
            <ul className="mt-2 text-gray-400">
              {menuItems.map((item, index) => (
                <li key={index} className="relative mb-1 text-center lg:text-left">
                  <Link className="transition duration-200 hover:text-red-500" to={item.label}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-sm font-semibold tracking-wide uppercase">customer care</h2>
            <ul className="mt-2 text-gray-400">
              <li className="relative mb-1 text-center lg:text-left">
                <a
                  href={`tel:+${settings.contactNumber.number}`}
                  className="transition duration-200 hover:text-red-500"
                >
                  Call us
                </a>
              </li>
              <li className="relative mb-1 text-center lg:text-left">
                <a
                  href={`https://search.google.com/local/writereview?placeid=${settings.googlePlaceId}`}
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
                  href={settings.facebookPage}
                  className="flex items-start transition duration-200 hover:text-red-500"
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
                  <span className="ml-2">The Elite Squad</span>
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
