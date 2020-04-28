import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import bg from "../images/homepage/homepage_exploreOurFunds.png"

const HomeOurFunds = ({}) => {
  return (
    <Container
      id="homeOurFunds"
      fluid
      className="text-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Row>
        <Col>
          <h1 className="article">
            Value and growth both serve a purpose in any portfolio. We believe,
            fundamentally,  in balance.
          </h1>
          <Link className="button secondary" to="/about">
            <span>Explore Our Funds</span>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeOurFunds)
