import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Podcast = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects"/>
      <article style={{height: "100vh"}}>
        Comming Soon...
      </article>
    </Layout>
  )
}

export default Podcast

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`