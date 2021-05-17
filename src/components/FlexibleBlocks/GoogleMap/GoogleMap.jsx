import React from 'react'

const GoogleMap = data => {
  return (
    <iframe
      className="w-full"
      title="Google Maps for Elite Restoration"
      src={data.source}
      height={data.height || 320}
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
    >
    </iframe>
  )
}

export default GoogleMap