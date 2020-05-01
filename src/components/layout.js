import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import {Navbar, Nav, Container, Jumbotron} from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
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
              Your time is limited, so don't waste it living someone else's life. Don't be trapped by Dogma which is living with the result of other people's thinking.
            </h2>
          </Jumbotron>
        </Container>
      </div>
    )
  } else {
    header = (
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
  return (
    <>
      <header>{header}</header>
      <Container
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
