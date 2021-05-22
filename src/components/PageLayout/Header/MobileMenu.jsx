import React, { useState } from "react"
import { Link } from 'gatsby'
import Logo from '../../Logo'

export const MobileMenu = ({ menuItems }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <button aria-label="mobile-menu" className="p-2 transition duration-200 focus:bg-white20" onClick={() => setExpanded(!expanded)}>
        <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      {expanded && <div className="fixed inset-0 z-50 bg-black px-4 py-2">
        <div className="flex justify-between">
          <Logo className="w-40 mr-6 lg:w-48" />
          <button className="p-2 text-white" onClick={() => setExpanded(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-8">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="block p-4 font-semibold text-center w-full transition duration-200 text-white"
                  activeClassName="text-red-500"
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>}
    </>
  )
}

export default MobileMenu
