import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import illustration from "../../images/homepage/homepage_aboutUs.png"

const HomeOurPhilosophy = ({}) => {
  return (
    <Container fluid id="homeOurPhilosophy">
      <Row className="d-flex ">
        <Col md={{ size: 5, offset: 1 }} className="text-container px-md-2">
          <h3>Our Philosophy</h3>
          <h1 className="section">Experienced investors with new ideas</h1>
          <div>
            Investing wasn’t designed with today’s investor in mind. So we’re
            recreating the experience from the ground up, making it more
            accessible, enjoyable, and rewarding. All the while providing astute
            investment solutions backed by a core team with decades of
            experience.
          </div>
          <Link className="button secondary" to="/about">
            <span>About Us</span>
          </Link>
        </Col>
        <Col
          md={{ size: 5, offset: 0 }}
          className="d-flex justify-content-center align-items-center img-column"
        >
          <div className="img-container">
            <img src={illustration} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeOurPhilosophy)
