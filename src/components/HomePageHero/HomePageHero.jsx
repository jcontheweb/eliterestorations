import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function HomePageHero() {
    const data = useStaticQuery(
        graphql`
        {
            wpPage(isFrontPage: {eq: true}) {
                homePage {
                  hero {
                    buttonLabel
                    heading
                    image {
                        sourceUrl
                        localFile {
                            childImageSharp {
                              gatsbyImageData(placeholder: BLURRED)
                            }
                          }
                    }
                    text
                  }
                }
              }
            wp {
                siteSettings {
                    siteOptions {
                        contactNumber {
                            number
                        }
                    }
                }
            }
        }
        `
    )
    const image = getImage(data.wpPage.homePage.hero.image.localFile)
    const hero = data.wpPage.homePage.hero
    return (
        <div className="bg-brandBlack">
            <div className="container relative">
                <div className="flex flex-wrap items-center justify-between py-12 lg:py-40">
                    <div className="text-white md:max-w-xl">
                        <div className="flex mb-1 text-3xl leading-none rounded lg:text-5xl">
                            <span className="w-2 mr-1 bg-red-500 lg:mr-4">{` `}</span>
                            <h1 className="text-4xl font-bold lg:text-6xl">{hero.heading}</h1>
                        </div>
                        <div className="mt-4 lg:mt-6 lg:text-lg" dangerouslySetInnerHTML={{ __html: hero.text }}></div>
                        <a href={`tel:${data.wp.siteSettings.siteOptions.contactNumber.number}`} className="inline-block w-full px-8 py-4 mt-8 text-sm font-semibold leading-none transition duration-200 bg-red-500 md:w-auto focus:shadow-outline hover:bg-red-600 focus:outline-none">
                            {hero.buttonLabel}
                        </a>
                    </div>
                    {hero.image && (
                        <div className="hidden lg:block flex-1 ml-8">
                            <GatsbyImage image={image} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}