import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaTwitter, FaInstagram, FaGithubAlt } from "react-icons/fa"
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
          </section>
          <section className="social-media">
            <a href="https://twitter.com/rnwathon" target="_blank" className="my-2"><FaTwitter size={24}/> </a>
            <a href="https://instagram.com/rnwathon" target="_blank" className="my-2"><FaInstagram size={24}/> </a>
            <a href="https://github.com/rnwathon" target="_blank" className="my-2"><FaGithubAlt size={24}/></a>
          </section>
        </Container>
      </div>
    )
  } else {
    return (
      <div className="header">
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