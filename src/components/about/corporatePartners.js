import React from "react"
import { Container, Row, Col } from "reactstrap"

import bbh_logo from "../../images/about/bbh_logo.png"
import cc_logo from "../../images/about/cc_logo.png"
import th_logo from "../../images/about/th_logo.png"
import via_logo from "../../images/about/via_logo.png"

const CorporatePartners = ({}) => {
  return (
    <Container fluid id="corporatePartners">
      <Row className="header">
        <Col className="d-flex justify-content-center">
          <h2>Corporate Partners</h2>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5 mb-md-0"
          xs="6"
          md="3"
        >
          <img src={bbh_logo} alt="" width="136" />
          <h3 className="mt-5">LOREM</h3>
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5 mb-md-0"
          xs="6"
          md="3"
        >
          <img src={via_logo} alt="" width="136" />
          <h3 className="mt-5">IPSUM</h3>
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between"
          xs="6"
          md="3"
        >
          <img src={cc_logo} alt="" width="136" />
          <h3 className="mt-5">AUDIT</h3>
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between"
          xs="6"
          md="3"
        >
          <img src={th_logo} alt="" width="136" />
          <h3 className="mt-5">LEGAL COUNSEL</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default CorporatePartners
