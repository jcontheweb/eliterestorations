import React, { useEffect, useRef, useState } from 'react'

const FormCareers = data => {
  return (
    <section>
      <div id="job-application" className="py-16 bg-white lg:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="max-w-md w-full">
              <p className="text-sm font-semibold leading-none text-red-500 uppercase">{data?.subheading}</p>
              <h3 className="mt-2 text-4xl font-semibold leading-none">{data?.heading}</h3>
              <div className="mt-4" dangerouslySetInnerHTML={{__html: data?.text}}></div>
              <div className="mt-8">
                {data.roles.map((role, index) => <JobListItem key={index} title={role.role} />)}
              </div>
            </div>
            <div className="w-full max-w-md mt-10 lg:mt-0 lg:ml-16">
              <ApplicationForm roles={data.roles} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const JobListItem = ({ title }) => (
  <div className="flex items-center mt-4 first:mt-0">
    <svg
      className="w-6 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
    <p className="ml-2 text-lg font-semibold leading-none">{title}</p>
  </div>
)

const ApplicationForm = ({roles}) => {
  const [filename, setFilename] = useState("")
  const formRef = useRef()
  const updateFilename = event => {
    setFilename(event.target.files[0].name)
  }
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleSubmit = e  => {
    e.preventDefault()
    const form = formRef.current;
    const formData = new FormData(form)
    const body = new URLSearchParams(formData).toString()
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "multipart/form-data" },
      body: body
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }
  useEffect(() => {
    formRef.current.addEventListener('submit', handleSubmit)
  }, [])


  return (
    <div className="relative max-w-xl mx-auto">
      <div
        className="absolute hidden bg-red-500 rounded-lg lg:block"
        style={{ transform: "translate(8px, -8px)", top: "2px", left: "-4px", right: "2px", bottom: "-6px" }}
      ></div>
      <form
        ref={formRef}
        action="/careers"
        method="post"
        data-netlify="true"
        name="job-application"
        className="relative overflow-hidden bg-white rounded-lg lg:shadow-xl"
      >
        <input type="hidden" name="form-name" value="job-application" />
        <div className="flex justify-center py-6 border-b">
          <p className="text-2xl leading-none">Join the team!</p>
        </div>
        <div className="py-6 lg:p-10">
          <label className="block">
            <span className="block mb-px text-sm font-semibold">Name</span>
            <input
              type="text"
              name="name"
              className="block w-full mt-1 placeholder-gray-400 form-input"
              placeholder="John Smith"
            />
          </label>
          <label className="block mt-4">
            <span className="block mb-px text-sm font-semibold">Email</span>
            <input
              name="email"
              className="block w-full mt-1 placeholder-gray-400 form-input"
              type="email"
              placeholder="john@gmail.com"
            />
          </label>
          <label className="block mt-4">
            <span className="block mb-px text-sm font-semibold">Phone</span>
            <input
              type="text"
              name="phone_number"
              className="block w-full mt-1 placeholder-gray-400 form-input"
              placeholder="(555)-555-5555"
            />
          </label>
          <label className="block mt-4">
            <span className="block mb-px text-sm font-semibold">Role</span>
            <select name="role" className="block w-full mt-1 form-select">
              {roles.map((role, index) => (
                <option key={index} value={role.role}>{role.role}</option>
              ))}
            </select>
          </label>
          <div className="mt-4">
            <span className="block mb-px text-sm font-semibold">Resume</span>
            <div className="flex items-center">
              <label className="inline-flex items-center px-4 py-2 mt-1 text-red-500 transition duration-300 bg-white border border-red-500 cursor-pointer hover:bg-red-500 hover:text-white">
                <svg
                  className="w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="ml-2 text-base leading-normal">Select a file</span>
                <input
                  name="resume"
                  onChange={updateFilename}
                  type="file"
                  className="hidden"
                />
              </label>
              <p className="flex flex-col ml-3 text-sm font-semibold leading-none">
                <span className="mr-1 font-normal">File:</span>
                {filename ? filename : "No file selected."}
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 border-t lg:p-6">
          <button
            type="submit"
            className="block w-full px-4 py-4 text-sm font-semibold leading-none text-center text-white transition duration-200 bg-red-500 focus:outline-none focus:shadow-outline hover:bg-red-600"
          >
            Submit application
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormCareers