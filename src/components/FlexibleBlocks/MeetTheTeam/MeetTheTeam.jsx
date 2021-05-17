import React from "react"
import TeamList from './TeamList'

const MeetTheTeam = data => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container text-center">
        <p className="text-sm font-semibold leading-none text-red-500 uppercase">{data.subheading}</p>
        <h3 className="mt-2 text-4xl font-semibold leading-none">{data.heading}</h3>
        <div className="max-w-4xl mx-auto mt-10 md:text-lg" dangerouslySetInnerHTML={{ __html: data?.text }}></div>
        {data.showTeamMembers && (
          <div className="container mt-10">
            <TeamList />
          </div>
        )}
      </div>
    </div>
  )
}

export default MeetTheTeam
