import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

const HomeBlog = ({}) => {
  return (
    <Container fluid id="homeBlog">
      <Row className="h-100">
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="section">BLOG</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeBlog)
