// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/PageLayout'
import HomePageHero from '../components/HomePageHero'


// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = (pageProps) => {
  let data
  const isFrontPage = pageProps.data.wpPage.isFrontPage
  // ### DATA VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  const componentsArray = data.page_components.components || []
  const components = componentsArray.map(component => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    }
  })
  return (
    <>
      <SEO seo={pageProps.data.wpPage.seo} />
      <Layout>
        {isFrontPage && <HomePageHero />}
        {components.map((component, index) => {
          // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
          return <div>Error: The component {component.name} was not found</div>
        })}
      </Layout>
    </>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###