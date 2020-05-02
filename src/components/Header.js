import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Header = ({location, title}) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  if (location.pathname === rootPath) {
    return (
      <div className="header" style={{minHeight: "350px"}}>
        <Container>
          <Navbar bg="transparent">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
              <h1 className="header-title">
                <Link
                  style={{
                    boxShadow: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  {title}
                </Link>
              </h1>
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Link to="/blog" className="text-white mx-3">Blog</Link>
                  <Link to="/about" className="text-white mx-3">About</Link>
                </Nav>
              </Navbar.Collapse>  
          </Navbar>
          <Jumbotron className="bg-transparent">
            <h2 className="header-text">
              Your time is limited, so don't waste it living someone else's life. Don't be trapped by Dogma which is living with the result of other people's thinking ✨
            </h2>
            <p>
              - Steve Jobs
            </p>
          </Jumbotron>
        </Container>
      </div>
    )
  } else {
    return (
      <div className="header">
        <Container>
          <Navbar bg="transparent">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <h3 className="header-title">
              <Link
                style={{
                  boxShadow: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h3>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Link to="/blog" className="text-white mx-3">Blog</Link>
                <Link to="/about" className="text-white mx-3">About</Link>
              </Nav>
            </Navbar.Collapse>  
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header