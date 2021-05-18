import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TeamList = () => {
    const data = useStaticQuery(
        graphql`
        {
            allWpEmployee {
                edges {
                    node {
                        staff {
                            jobTitle
                            name
                            image {
                                sourceUrl
                                localFile {
                                    childImageSharp {
                                      gatsbyImageData(placeholder: BLURRED)
                                    }
                                  }
                            }
                        }
                        uri
                    }
                }
            }
        }
        `
    )
    const employees = data.allWpEmployee.edges

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee, index) => (
                <TeamListCard employee={employee.node} key={index} />
            ))}
            <Link
                style={{ paddingBottom: "100%" }}
                to="/careers"
                className="relative flex items-end justify-center p-4 border border-red-500 border-dashed group"
            >
                <div className="absolute inset-0 flex items-center justify-center p-4 text-red-500 text-opacity-25">
                    <svg
                        className="w-32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </div>
                <div className="absolute inset-0 flex items-end p-4 transition duration-200 bg-red-500 opacity-0 bg-opacity-90 group-hover:opacity-100">
                    <div>
                        <p className="text-sm text-left text-white text-opacity-75 uppercase transition duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            join the team
                </p>
                        <p className="text-lg text-left text-white underline transition duration-300 delay-75 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            View open vacancies
                </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const TeamListCard = ({ employee }) => {
    const image = getImage(employee.staff.image.localFile)
    return (
        <div className="relative overflow-hidden shadow-lg group" style={{ paddingBottom: "100%" }}>
            <div className="absolute h-full w-full">
                <GatsbyImage image={image} style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                }} alt="" />
            </div>
            <div className="absolute inset-0 flex items-end p-4 transition duration-200 bg-red-500 opacity-0 bg-opacity-90 group-hover:opacity-100">
                <div>
                    <p className="text-sm text-left text-white text-opacity-75 uppercase transition-all duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        {employee.staff.jobTitle}
                    </p>
                    <p className="text-lg text-left text-white transition-all duration-300 delay-75 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        {employee.staff.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TeamList