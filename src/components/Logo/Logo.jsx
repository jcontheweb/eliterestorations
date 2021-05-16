import React from "react"
import { Link } from "gatsby"
import Icon from '../../images/logo.inline.svg'

const Logo = ({ className }) => {
  return (
    <Link
      className={`${className} block items-center lg:py-2`}
      to="/"
    >
      <span className="sr-only">Elite Restoration Logo</span>
      <div className="flex items-center">
        <Icon />
      </div>
    </Link>
  )
}

export default Logo
