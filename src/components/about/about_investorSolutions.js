import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import as_icon from "../../images/about/as_icon.png"
import ind_icon from "../../images/about/ind_icon.png"
import ins_icon from "../../images/about/ins_icon.png"
import etf_icon from "../../images/about/etf_icon.png"

const AboutInvestorSolutions = ({}) => {
  return (
    <Container fluid id="aboutInvestorSolutions">
      <Row className="d-flex justify-content-center">
        <Col md="6">
          <Row className="title-row">
            <Col>
              <h3>Investor Solutions</h3>
              <h1>Products, asset management, you name it</h1>
            </Col>
          </Row>
          <Row className="icon-row">
            <Col
              md="6"
              className="d-flex justify-content-center align-items-center text-center mb-5"
            >
              <Link
                to="/investor-solutions/exchange-traded-funds"
                className="d-flex flex-column justify-content-between h-100"
              >
                <img src={etf_icon} alt="" className="pt-0 pt-md-5" />
                <div className="body-small mt-4">Exchange Traded Funds</div>
              </Link>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-center align-items-center text-center mb-5"
            >
              <Link
                to="/investor-solutions/exchange-traded-funds"
                className="d-flex flex-column justify-content-between h-100"
              >
                <img src={as_icon} alt="" />
                <div className="body-small mt-4">Advisor Services</div>
              </Link>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-center align-items-center text-center"
            >
              <Link
                to="/investor-solutions/exchange-traded-funds"
                className="d-flex flex-column justify-content-between h-100"
              >
                <img src={ins_icon} alt="" className="pt-0 pt-md-4" />
                <div className="body-small mt-4">Institutional Investors</div>
              </Link>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-center align-items-center text-center"
            >
              <Link
                to="/investor-solutions/exchange-traded-funds"
                className="d-flex flex-column justify-content-between h-100 mt-5 mt-md-0"
              >
                <img src={ind_icon} alt="" />
                <div className="body-small mt-4">Individual Investors</div>
              </Link>
            </Col>
          </Row>
          <Row className="cta-row">
            <Col>
              <Link to="/investor-solutions" className="button secondary">
                <span>Start the Conversation</span>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(AboutInvestorSolutions)
