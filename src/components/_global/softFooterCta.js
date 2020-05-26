import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import arrow_white from "../../images/icons/arrow-diag.svg"
import arrow_black from "../../images/icons/arrow-diag-black.svg"

const softFooterCta = ({ background, text, ctaLead, cta, link }) => {
  let bg = {
    backgroundColor: "#fdfc71",
  }
  if (background) {
    bg = { backgroundImage: `url(${background})` }
  }
  return (
    <Container fluid id="softFooterCta" style={bg}>
      {background ? <div className="overlay"></div> : ""}
      <Row className="h-100">
        <Col
          className={"text-container text-" + (background ? "white" : "black")}
        >
          <h2 className="article main">{text}</h2>
          <h2 className="article">
            {ctaLead}{" "}
            <Link to={link} className="underline">
              {cta}
            </Link>
            <img
              src={background ? arrow_white : arrow_black}
              alt=""
              className="ml-4"
            />
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(softFooterCta)
