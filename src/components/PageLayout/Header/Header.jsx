import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'

import Logo from '../../Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
    const data = useStaticQuery(
        graphql`
        {
            wpMenu(locations: {eq: PRIMARY}) {
                id
                menuItems {
                  nodes {
                    url
                    label
                    path
                  }
                }
              }
          wp {
            siteSettings {
              siteOptions {
                addressLine1
                addressLine2
                alertBar
                contactNumber {
                  number
                  label
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
        <header className="sticky top-0 z-50 bg-white lg:border-b">
            <div className="hidden lg:block bg-red-500 py-2 text-center text-sm text-white" dangerouslySetInnerHTML={{ __html: settings.alertBar }}></div>
            <div className="flex items-center justify-between px-4 py-2 overflow-auto text-white whitespace-nowrap lg:border-b bg-brandBlack">
                <Logo className="w-40 mr-6 lg:w-48" />
                <div className="lg:hidden">
                    <MobileMenu menuItems={menuItems} />
                </div>

                <div className="hidden lg:flex items-center divide-x divide-white divide-opacity-20">
                    <div className="flex items-center px-0 pr-4 md:px-4 group">
                        <svg
                            className="w-6 mr-2 transition duration-200 group-hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div>
                            <p className="text-sm leading-none text-gray-400">Call us today</p>
                            <a
                                className="block mt-px font-semibold leading-none tracking-tight transition duration-200 group-hover:text-red-500 hover:underline"
                                href={`tel:${settings.contactNumber.number}`}
                            >{settings.contactNumber.label} </a>
                        </div>
                    </div>
                    <div className="flex items-center px-4 group">
                        <svg
                            className="w-6 mr-2 transition duration-200 group-hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div>
                            <p className="text-sm leading-none text-gray-400">Working hours</p>
                            <span className="block mt-px font-semibold leading-none tracking-tight transition duration-200 group-hover:text-red-500">
                                Available 24/7
            </span>
                        </div>
                    </div>
                    <div className="flex items-center pl-4 pr-4 md:pr-0 group">
                        <svg
                            className="w-6 mr-2 transition duration-200 group-hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div>
                            <p className="text-sm leading-none text-gray-400">{settings.addressLine1}</p>
                            <a
                                href="/"
                                className="block mt-px font-semibold leading-none tracking-tight transition duration-200 group-hover:text-red-500 hover:underline"
                            >{settings.addressLine2} </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="hidden relative z-20 lg:flex items-center justify-between text-brandBlack">
                <ul className="flex items-center overflow-x-auto whitespace-nowrap xl:whitespace-normal ml-auto">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                activeClassName="bg-gray-100"
                                className="flex p-4 text-sm font-semibold text-center transition duration-200 border-l hover:bg-gray-100 focus:bg-gray-200 focus:text-black"
                                to={item.path}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}