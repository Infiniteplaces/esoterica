import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

const HomeHero = ({}) => {
  return (
    <Container fluid id="homeHero">
      <Row className="h-100">
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="section text-black">
            Next-generation <br /> investing
          </h1>
          <h3 className="py-4">
            Capturing Opportunities in the New Digital Economy
            <br />
             Backed by On-the-Ground Fundamental Research
          </h3>
          <Link className="button primary" to="/investor-solutions">
            Learn More
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeHero)
