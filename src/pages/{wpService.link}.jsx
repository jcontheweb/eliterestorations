import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import GetAQuote from '../components/FlexibleBlocks/GetAQuote'

export default function ServicePage({ data }) {
  const services = data.allWpService
  const service = data.wpService
  const header = service?.servicesPageComponents?.pageHeader

  return (
    <>
      <SEO seo={data.wpService.seo} />
      <Layout>
        <>
          <div
            className="relative py-16 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${header?.image?.sourceUrl})` }}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-brandBlack"></div>
            <div className="container">
              <h1 className="relative text-3xl font-semibold leading-tight text-center text-white capitalize md:text-5xl">
                {header?.heading}
              </h1>
            </div>
          </div>

          {/* main section */}
          <div className="flex flex-1">
            <div className="hidden bg-white border-r md:block">
              <div className="sticky" style={{ top: "168.8px" }}>
                <h3 className="flex p-4 text-lg font-semibold leading-none border-b">
                  <div className="w-1 mr-2 bg-red-500"> </div>Service list
            </h3>
                {services.edges.map((servicePost, index) => (
                  <Link
                    key={index}
                    to={servicePost.node.uri}
                    className={`p-4 border-b whitespace-no-wrap font-semibold text-sm flex items-center justify-between capitalize text-brandBlack ${servicePost.node.uri === service.uri
                        ? "bg-gray-100 -mr-px"
                        : "hover:bg-gray-200 duration-200 transition text-opacity-75 hover:text-opacity-100"
                      }`}
                  >
                    {servicePost.node.title}
                  </Link>
                ))}
              </div>
            </div>
            <article className="flex-1 bg-gray-100 markdown">
              <div
                className="px-6 py-4 mx-auto text-opacity-75 text-brandBlack"
                dangerouslySetInnerHTML={{ __html: service.content }}
              ></div>
            </article>
          </div>
          <GetAQuote />
        </>
      </Layout>
    </>
  )
}

export const query = graphql`
query($id: String) {
    wpService(id: { eq: $id }) {
        title
        uri
        content
        seo {
          canonical
          title
          metaDesc
          focuskw
          metaRobotsNoindex
          metaRobotsNofollow
          opengraphAuthor
          opengraphDescription
          opengraphTitle
          opengraphDescription
          opengraphImage {
              altText
              sourceUrl
              srcSet
          }
          opengraphUrl
          opengraphSiteName
          opengraphPublishedTime
          opengraphModifiedTime
          twitterTitle
          twitterDescription
          twitterImage {
              altText
              sourceUrl
              srcSet
          }
          breadcrumbs {
              url
              text
          }
          cornerstone
          schema {
              pageType
              articleType
              raw
          }
          readingTime
          fullHead
      }
        servicesPageComponents {
          pageHeader {
            heading
            image {
              sourceUrl
            }
          }
        }
    }
    allWpService {
      edges {
        node {
          id
          title
          uri
        }
      }
    }
}
`