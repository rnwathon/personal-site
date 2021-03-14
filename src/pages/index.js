import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GithubCalendar from "../components/GithubCalendar"
import { rhythm } from "../utils/typography"
import { Button, Card, Row, Col } from "react-bootstrap"

import projectsImg from "../images/Asset1.png"
import videosImg from "../images/Asset2.png"
import podcastImg from "../images/Asset3.png"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO/>
      <div className="content">
        <div className="content-bloglist">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Card key={node.fields.slug} className="mb-3 bg-glass">
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
            <Link to="/blog" className="btn btn-primary px-5">View All Articles</Link>
          </div>
        </div>
        <Card className="bg-glass shadow-sm">
          <Card.Body>
            <Row className="m-0">
              <Col md={4} sm={12}>
                <Card bg="secondary" className="content-card shadow-secondary-lg">
                  <Card.Header>Projects</Card.Header>
                  <Card.Body>
                    <img src={projectsImg} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12}>
                <Card bg="danger" className="content-card shadow-danger-lg">
                  <Card.Header>Videos</Card.Header>
                  <Card.Body>
                    <img src={videosImg} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12}>
                <Card bg="success" className="content-card shadow-success-lg">
                  <Card.Header>Podcast</Card.Header>
                  <Card.Body>
                    <img src={podcastImg} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <GithubCalendar />
              </Col>
            </Row>
          </Card.Body>
        </Card>
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
