import React, { Component } from 'react'
import { Link } from "gatsby"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"
import { FaTwitter, FaInstagram, FaGithubAlt } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-center">
        <div className="footer-brand">
          <h2>Reach me out!</h2>
          <a href="https://twitter.com/rnwathon" target="_blank" className="mx-5"><FaTwitter size={64}/> </a>
          <a href="https://instagram.com/rnwathon" target="_blank" className="mx-5"><FaInstagram size={64}/> </a>
          <a href="https://github.com/rnwathon" target="_blank" className="mx-5"><FaGithubAlt size={64}/></a>
        </div>
        <footer>
          Rakhmat N. Wathon © {new Date().getFullYear()}, Built with
          {` `}
          ❤️ and 🥤
        </footer>
      </Container>
    </div>
  )
}

export default Footer
