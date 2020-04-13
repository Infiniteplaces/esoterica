import { Link } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import logo_black from "../../../static/logos/esoterica-logo-black.svg"
import logo_white from "../../../static/logos/esoterica-logo-white.svg"

import linkedin from "../../../static/icons/linkedin.svg"
import youtube from "../../../static/icons/youtube.svg"
import twitter from "../../../static/icons/twitter.svg"
import mail from "../../../static/icons/mail.svg"

const Header = ({ path }) => {
  return (
    <header>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={{ size: 2 }} className="logo-container">
            <img src={logo_black} alt="nav-logo" className="nav-logo" />
          </Col>
          <Col md={{ size: 6, offset: 1 }} className="nav-links">
            <Link to="/">
              <div className={"indicator " + (path === "/" ? "active" : "")} />
              <span>Home</span>
            </Link>
            <Link to="/products">
              <div
                className={
                  "indicator " + (path === "/products" ? "active" : "")
                }
              />
              <span>Products</span>
            </Link>
            <Link to="/about">
              <div
                className={"indicator " + (path === "/about" ? "active" : "")}
              />
              <span>About Us</span>
            </Link>
            <Link to="/resources">
              <div
                className={
                  "indicator " + (path === "/resources" ? "active" : "")
                }
              />
              <span>Resources</span>
            </Link>
          </Col>
          <Col md={{ size: 2, offset: 1 }} className="nav-icons">
            <a href="" target="_blank" rel="norefferer noopener">
              <img
                src={twitter}
                alt="twitter"
                className="twitter-icon"
                width="16px"
              />
            </a>
            <a href="" target="_blank" rel="norefferer noopener">
              <img
                src={linkedin}
                alt="linkedin"
                className="linkedin-icon"
                width="17px"
              />
            </a>
            <a href="" target="_blank" rel="norefferer noopener">
              <img
                src={youtube}
                alt="youtube"
                className="youtube-icon"
                width="21px"
              />
            </a>
            <a href="malto:" target="_blank" rel="norefferer noopener">
              <img src={mail} alt="mail" className="mail-icon" width="19" />
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default connect(state => ({}), null)(Header)
