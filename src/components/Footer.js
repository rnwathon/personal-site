import React, { Component } from 'react'
import { Link } from "gatsby"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"


const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-center">
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          &#9749;
        </footer>
      </Container>
    </div>
  )
}

export default Footer
