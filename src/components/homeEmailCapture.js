import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import Email from "./_global/email"
import bg from "../images/homepage/homepage_exploreOurFunds.png"

const HomeEmailCapture = ({}) => {
  return (
    <Container id="homeEmailCapture" fluid>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col
          md={{ size: 8 }}
          lg={{ size: 6 }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h3>
            Keep up with how we’re doing, and get weekly market takeaways from
            our in-house expert, Don Rich.
          </h3>

          <Email header={false} />
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeEmailCapture)
