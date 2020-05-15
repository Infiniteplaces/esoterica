import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../../components/_global/layout"
import SEO from "../../../components/_global/seo"

const WUGI = ({}) => {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({ mobile: state.global.mobile }), null)(Layout)
