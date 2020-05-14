import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import illustration from "../../images/about/about_ourValues_illus.svg"

const OurValues = ({}) => {
  return (
    <Container fluid id="aboutOurValues">
      <Row className="d-flex">
        <Col
          md={{ size: 5, offset: 1 }}
          className="text-container px-0 px-md-2"
        >
          <h3>Our Values</h3>
          <h1 className="section">It’s about more than good returns.</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            placerat orci, ut interdum magna. Fusce viverra ex vel tempus
            volutpat. Praesent pellentesque ipsum quis placerat malesuada.
            Pellentesque ultricies laoreet nisi, suscipit consectetur tellus
            ullamcorper in. Donec lobortis, sapien ut egestas volutpat, augue
            urna fringilla turpis, ut pellentesque sem orci.
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
