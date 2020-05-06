import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Email from "./email"

import logo_white from "../../images/logos/esoterica-logo-white.svg"

const Footer = ({}) => {
  return (
    <footer>
      <Container fluid className="footer-container">
        <Row className="h-50">
          <Col className="d-flex flex-column">
            <Link to="/about">About</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Legal</Link>
          </Col>
          <Col className="d-flex flex-column">
            <Link to="/">Team</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Contact</Link>
          </Col>
          <Col className="d-flex flex-column">
            <a href="https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw">
              Youtube
            </a>
            <a href="https://twitter.com/esotericacap?lang=en">Twitter</a>
            <a href="https://www.linkedin.com/company/esoterica-capital/about/">
              Linkedin
            </a>
          </Col>
          <Col className="d-flex flex-column text-faded">
            <p>© 2020 Esoterica</p>
            <p>Capital Management</p>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
        <Row className="h-50">
          <Col className="d-flex align-items-end">
            <img
              src={logo_white}
              alt="footer logo"
              className="footer-logo"
              width="467"
            />
          </Col>
          <Col className="d-flex justify-content-end align-items-end">
            <Email header={true} />
          </Col>
        </Row>
      </Container>
      <div className="announcement-bar">
        <h3>Next</h3>
        <h3>Generation</h3>
        <h3>Investing</h3>
      </div>
    </footer>
  )
}

export default connect(state => ({}), null)(Footer)
