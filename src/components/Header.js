import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Memphis0 from '../../content/assets/memphis0.svg'
import Memphis1 from '../../content/assets/memphis1.svg'
// import Potrait from '../../content/assets/potrait.png'

const Header = ({location, title}) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/potrait.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
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
      <div className="header">
        <Memphis0 className="memphis0"/>
        <Memphis1 className="memphis1"/>
        <Container>
          <Navbar bg="transparent">
              <Navbar.Brand>
                <Link to={`/`}> {title} </Link>
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Link to="/blog">Blog</Link>
                <Link to="#">Resume</Link>
              </Nav>
          </Navbar>
          <section className="display">
            <div className="display-text">
              <h2> Hi 👋🏼 </h2>
              <h2> I'm Rakhmat </h2>
              <h3> Front-End Developer </h3>
            </div>
            <div className="display-image">
              <Image
                loading="eager"
                fluid={data.avatar.childImageSharp.fluid}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
            </div>
          </section>
        </Container>
      </div>
    )
  } else {
    return (
      <div className="header">
        <Memphis0 className="memphis0"/>
        <Memphis1 className="memphis1"/>
        <Container>
          <Navbar bg="transparent">
              <Navbar.Brand>
                <Link to={`/`}> {title} </Link>
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Link to="/blog">Blog</Link>
                <Link to="#">Resume</Link>
              </Nav>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header