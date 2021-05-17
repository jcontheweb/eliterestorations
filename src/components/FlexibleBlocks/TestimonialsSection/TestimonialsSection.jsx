import React from "react"

import TestimonialList from "./list"

const TestimonialsSection = data => {
  return (
    <section className="py-16 overflow-hidden bg-gray-100 lg:py-24">
      <div className="max-w-xl px-4 mx-auto text-center">
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold leading-none text-red-500 uppercase">{data.subheading}</p>
          <p className="mt-2 text-lg font-semibold leading-tight">{data.heading}</p>
        </div>

        <ul className="relative flex justify-center mt-24">
          {TestimonialList.map((testimonial, index) => (
            <li
              key={index}
              className={`block sm:flex-shrink-0 max-w-md ${
                index === 0 || index === 2 ? "absolute opacity-75 hidden md:block" : "z-10"
              }`}
              style={{
                transform:
                  index === 0
                    ? "translate(-75%, -25%) scale(.8)"
                    : index === 2
                    ? "translate(75%, -25%) scale(.8)"
                    : "translate(0)",
              }}
            >
              <div className="relative p-10 bg-white rounded-lg shadow-lg">
                <div
                  className="absolute top-0 w-16 h-16 overflow-hidden border-4 border-gray-100 rounded-full"
                  style={{ left: "50%", transform: "translate(-50%, -50%)" }}
                >
                  <img src={testimonial.avatar} alt="" />
                </div>
                <p className="mt-4 text-center">{testimonial.review}</p>
                <div className="flex items-center justify-center mt-8">
                  {[...Array(testimonial.rating)].map((number, index) => (
                    <svg
                      key={index}
                      className="w-4 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold">
                  {testimonial.author}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TestimonialsSection
