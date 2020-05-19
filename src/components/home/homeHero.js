import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import hero from "../../images/homepage/home-sun-hero.svg"

const HomeHero = ({}) => {
  return (
    <Container fluid id="homeHero" style={{ backgroundImage: `url(${hero})` }}>
      <Row className="h-100">
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="section text-black">
            Next-generation <br /> investing
          </h1>
          <h3 className="py-4">
            We’re redesigning investing for all, while offering a range of
            <br />
            investment solutions rooted in a new digital economy.
          </h3>
          <Link className="button primary" to="/our-solutions">
            Learn More
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeHero)
