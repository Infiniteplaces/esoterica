import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import bg from "../../images/homepage/homepage_exploreOurFunds.png"

const HomeOurFunds = ({}) => {
  return (
    <Container
      id="homeOurFunds"
      fluid
      className="text-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Row className="d-flex justify-content-center">
        <Col
          md="8"
          className="px-0 px-md-2 d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className="section">
            The new digital economy  is not a light switch. It’s an evolution.
          </h1>
          <a
            className="button secondary"
            href="https://www.esotericacap.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Explore Our Fund</span>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeOurFunds)
