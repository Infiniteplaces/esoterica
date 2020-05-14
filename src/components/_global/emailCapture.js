import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import Email from "./email"
import bg from "../../images/homepage/homepage_exploreOurFunds.png"

const EmailCapture = ({}) => {
  return (
    <Container id="emailCapture" fluid>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col
          md={{ size: 8 }}
          lg={{ size: 6 }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h3>
            Get breakdowns of investment strategy, market takeaways, and the
            most lucid takes on where things are headed.
          </h3>

          <Email header={false} />
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(EmailCapture)
