import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import logo_white from "../../../static/logos/esoterica-logo-white.svg"

const Footer = ({}) => {
  return (
    <footer>
      <Container fluid className="footer-container">
        <Row className="h-50">
          <Col className="d-flex flex-column">
            <Link to="">About</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Legal</Link>
          </Col>
          <Col className="d-flex flex-column">
            <Link to="">Team</Link>
            <Link to="">Careers</Link>
            <Link to="">Contact</Link>
          </Col>
          <Col className="d-flex flex-column">
            <Link to="">Youtube</Link>
            <Link to="">Twitter</Link>
            <Link to="">Linkedin</Link>
          </Col>
          <Col className="d-flex flex-column text-faded">
            <p to="">© 2020 Esoterica</p>
            <p to="">Capital Management</p>
            <p to="">All Rights Reserved</p>
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
          <Col>Email</Col>
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
