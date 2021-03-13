import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { Card, Form } from "react-bootstrap"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  let [posts, setPosts] = useState([...data.allMarkdownRemark.edges])
  let [filter, setFilter] = useState("")

  useEffect(() => {
    if(filter === ""){
      setPosts(data.allMarkdownRemark.edges)
      return;
    }

    let filteredPosts = data.allMarkdownRemark.edges
      .filter(post => post.node.frontmatter.title.toLowerCase()
      .includes(filter.toLowerCase()))

    setPosts(filteredPosts)
  }, [filter])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Post"/>
      <Form className="pt-5 mb-5 w-50 mx-auto">
        <Form.Group>
          <Form.Control 
            type="text" 
            placeholder="Search..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Form.Group>
      </Form>
      <article>
        {posts.length ?
          posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Card key={node.fields.slug} className="mb-3 shadow-sm bg-glass">
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
          })
          :
          <div className="text-center">
            <span className="display-1">😟</span>
            <h3>I'm affraid there's no article with that keyword</h3>
            <a href={`https://www.google.com/search?q=site:rnwathon.com/blog+${filter}`}>Try using Google</a>
          </div>
        }
      </article>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
