import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { Button, Card } from "react-bootstrap"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO/>
      <div className="homepage-bloglist">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Card key={node.fields.slug} className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={`/blog/${node.fields.slug}`}>
                      {title}
                    </Link>
                  </h3>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  📅 {node.frontmatter.date} - ⌛ {node.fields.readingTime.text}
                </Card.Subtitle>
                <p
                  className="font-italic"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Card.Body>
            </Card>
          )
        })}
        <div className="text-center">
          <Link to="/blog" className="btn btn-primary">View All Articles</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { featuredpost: { eq: true }}}
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
