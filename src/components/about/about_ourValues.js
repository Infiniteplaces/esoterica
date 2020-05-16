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
          md={{ size: 5, offset: 1 }}
          className="text-container px-0 px-md-2"
        >
          <h3>Our Values</h3>
          <h1 className="section">Let’s make the future bright.</h1>
          <div>
            Our leadership team has managed some of the world’s most prominent
            funds. We’re now shifting our focus to ensure that the opportunity
            to create a better future gets passed along. It’s our goal to level
            the playing field by sharing our knowledge, the insights and tools
            previously reserved for large, institutional investors.
          </div>
          <Link className="button secondary" to="/about">
            <span>Join our Team</span>
          </Link>
        </Col>
        <Col
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
