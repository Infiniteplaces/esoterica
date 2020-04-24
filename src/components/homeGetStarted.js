import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import arrow from "../images/icons/arrow-diag.svg"

import bg from "../images/homepage/homepage_getStarted.png"

const HomeGetStarted = ({}) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "homepage/homepage_getStarted.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1440) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Container
      fluid
      id="homeGetStarted"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>
      <Row>
        <Col className="text-container">
          <h1 className="article main">
            There’s more to investing than just ones and zeros. Learn what we
            mean here.
          </h1>
          <h1 className="article">
            Or,{" "}
            <Link to="/" className="underline">
              get started
            </Link>
            <img src={arrow} alt="" className="ml-5" />
          </h1>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeGetStarted)
