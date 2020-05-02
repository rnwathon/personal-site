import React, { Component } from 'react'
import { Link } from "gatsby"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"


const Header = ({location, title}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  if (location.pathname === rootPath) {
    return (
      <div className="header" style={{minHeight: "350px"}}>
        <Container>
          <Navbar bg="transparent">
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
                  <Nav.Link href="#" className="text-white">Blog</Nav.Link>
                  <Nav.Link href="#" className="text-white">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>  
          </Navbar>
          <Jumbotron className="bg-transparent">
            <h2 className="header-text">
              Your time is limited, so don't waste it living someone else's life. Don't be trapped by Dogma which is living with the result of other people's thinking ✨
            </h2>
          </Jumbotron>
        </Container>
      </div>
    )
  } else {
    return (
      <div className="header">
        <Navbar bg="transparent">
          <Container>
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
                <Nav.Link href="#" className="text-white">Blog</Nav.Link>
                <Nav.Link href="#" className="text-white">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>  
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
