import React from "react"
import Circles from "../../../images/circles.svg"

const GetAQuote = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-b from-red-500 to-red-600 lg:py-0 lg:pt-0">
      <div className="container relative">
        <img
          className="absolute opacity-25"
          style={{ transform: "translateX(-50%)", left: "50%" }}
          src={Circles}
          alt=""
        />
        <img
          className="absolute opacity-25"
          style={{
            transform: "translateX(-50%) scale(2) rotate(45deg)",
            left: "50%",
          }}
          src={Circles}
          alt=""
        />
        <div className="relative py-12 flex items-center justify-center">
          <div className="text-center">
            <p className="inline text-xl leading-none text-white">Call now,</p>
            <h2 className="mt-1 text-4xl font-semibold leading-none tracking-tight text-white lg:text-5xl">
              <div
                className="absolute left-0 opacity-25 lg:opacity-50"
                style={{ transform: "translate(-50%, -50%)", top: "50%" }}
              >
              </div>
              Get a quote <br className="hidden lg:block" /> instantly.
            </h2>
            <a
              className="relative inline-flex items-center justify-center w-full px-3 py-3 mt-8 font-semibold leading-none tracking-tight text-white transition duration-200 border-2 shadow-lg lg:w-auto focus:shadow-inner border-brandBlack bg-brandBlack"
              href={`tel:123123123`}
            >
              <svg
                className="w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 417-825-3740
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetAQuote
