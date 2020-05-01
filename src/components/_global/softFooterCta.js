import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import arrow from "../../images/icons/arrow-diag.svg"

const softFooterCta = ({ background, text, ctaLead, cta, link }) => {
  return (
    <Container
      fluid
      id="softFooterCta"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay"></div>
      <Row className="h-100">
        <Col className="text-container">
          <h2 className="article main">{text}</h2>
          <h2 className="article">
            {ctaLead}{" "}
            <Link to={link} className="underline">
              {cta}
            </Link>
            <img src={arrow} alt="" className="ml-5" />
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(softFooterCta)
