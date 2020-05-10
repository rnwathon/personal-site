import React, { Component } from 'react'
import { Link } from "gatsby"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"


const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-center">
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
