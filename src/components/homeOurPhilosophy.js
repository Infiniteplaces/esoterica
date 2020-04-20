import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const HomeOurPhilosophy = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homepage/homepage_aboutUs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container fluid id="homeOurPhilosophy">
      <Row className="d-flex">
        <Col md={{ size: 5, offset: 1 }} className="text-container">
          <h3>Our Philosophy</h3>
          <h1 className="section">Experienced investors with new ideas</h1>
          <div>
            Investing wasn’t designed for today’s investor. We balance growth
            and wealth preservation, then make the experience more accessible,
            more attractive, and more rewarding.
          </div>
          <Link className="button secondary" to="/about">
            <span>About Us</span>
          </Link>
        </Col>
        <Col
          md={{ size: 5 }}
          className="d-flex justify-content-center align-items-center img-column"
        >
          <div className="img-container">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeOurPhilosophy)
