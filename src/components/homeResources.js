import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const HomeResources = ({}) => {
  let p =
    "WTF is an ETF? Why the future looks bright for traded investments. Why Morgan Stanley’s E*Trade deal means bigger banks"
  return (
    <Container fluid id="homeResources">
      <Row className="marquee-row">
        <Col md={{}} className="marquee-container">
          <div className="marquee">
            <h1 className="section text-path-one">{p}</h1>
            <h1 className="section text-path-two">{p}</h1>
          </div>
          <div className="marquee">
            <h1 className="section text-path-one reverse">{p}</h1>
            <h1 className="section text-path-two reverse">{p}</h1>
          </div>
          <div className="marquee">
            <h1 className="section text-path-one ">{p}</h1>
            <h1 className="section text-path-two ">{p}</h1>
          </div>
          <div className="marquee">
            <h1 className="section text-path-one reverse">{p}</h1>
            <h1 className="section text-path-two reverse">{p}</h1>
          </div>
        </Col>
      </Row>
      <Row className="cta-row">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="cta">
            <Link to="/" className="underline">
              View All Resources
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeResources)
