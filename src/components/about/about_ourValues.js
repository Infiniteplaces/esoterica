import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import illustration from "../../images/about/about_ourValues_illus.png"

const OurValues = ({}) => {
  return (
    <Container fluid id="aboutOurValues">
      <Row className="d-flex">
        <Col
          xs="12"
          md={{ size: 5, offset: 1 }}
          className="text-container px-md-2"
        >
          <h3>Our Values</h3>
          <h1 className="section">Let’s make the future bright.</h1>
          <div>
            Our leadership team has worked at some of the world’s most prominent
            asset management companies and institutional investors. We’re now
            shifting our focus to ensure that the opportunity to create a better
            future gets passed along. It’s our goal to level the playing field
            by sharing our knowledge, insights and tools previously reserved for
            large institutional investors.
          </div>
          <a
            className="button secondary"
            href="mailto:careers@esotericacap.com"
          >
            <span>Join our Team</span>
          </a>
        </Col>
        <Col
          xs="12"
          md={{ size: 5 }}
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

export default connect(state => ({}), null)(OurValues)
