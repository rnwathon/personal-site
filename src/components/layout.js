import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header location={location} title={title}/>
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
