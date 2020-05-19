import React from "react"
import { Container, Row, Col } from "reactstrap"

import bbh_logo from "../../images/logos/bbh_logo.png"
import cc_logo from "../../images/logos/cc_logo.png"
import th_logo from "../../images/logos/th_logo.png"
import via_logo from "../../images/logos/via_logo.png"
import cboe_logo from "../../images/logos/cboe_logo.png"
import foreside_logo from "../../images/logos/foreside_logo.png"

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
          className="d-flex flex-column align-items-center justify-content-between mb-5"
          xs="6"
          md="4"
        >
          <img src={bbh_logo} alt="" width="100" />
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5"
          xs="6"
          md="4"
        >
          <img src={via_logo} alt="" width="156" />
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5"
          xs="6"
          md="4"
        >
          <img src={cc_logo} alt="" width="156" />
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5"
          xs="6"
          md="4"
        >
          <img src={th_logo} alt="" width="136" />
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5"
          xs="6"
          md="4"
        >
          <img src={foreside_logo} alt="" width="156" />
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-between mb-5"
          xs="6"
          md="4"
        >
          <img src={cboe_logo} alt="" width="136" />
        </Col>
      </Row>
    </Container>
  )
}

export default CorporatePartners
