import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import get from "lodash/get"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const ResourcesMarquee = ({}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulGlossary {
        nodes {
          slug
          title
          heroImage {
            fixed(width: 250) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  `)
  let { nodes } = data.allContentfulGlossary

  let blockOne = [...Array(50).keys()].map((i, idx) => {
    return (
      <span key={idx}>
        <Img fixed={nodes[0].heroImage.fixed} alt="" className="mx-5" />
        {nodes[0].title}
      </span>
    )
  })
  let blockTwo = [...Array(50).keys()].map((i, idx) => {
    return (
      <span key={idx}>
        <Img fixed={nodes[1].heroImage.fixed} alt="" className="mx-5" />
        {nodes[1].title}
      </span>
    )
  })
  let blockThree = [...Array(50).keys()].map((i, idx) => {
    return (
      <span key={idx}>
        <Img fixed={nodes[2].heroImage.fixed} alt="" className="mx-5" />
        {nodes[2].title}
      </span>
    )
  })
  let blockFour = [...Array(50).keys()].map((i, idx) => {
    return (
      <span key={idx}>
        <Img fixed={nodes[3].heroImage.fixed} alt="" className="mx-5" />
        {nodes[3].title}
      </span>
    )
  })

  return (
    <Container fluid id="resourcesMarquee">
      <Row className="marquee-row">
        <Col md={{}} className="marquee-container">
          <Link to={"/resources/glossary/" + nodes[0].slug}>
            <div className="marquee">
              <h1 className="text-path-one">{blockOne}</h1>
            </div>
          </Link>
          <Link to={"/resources/glossary/" + nodes[1].slug}>
            <div className="marquee">
              <h1 className="text-path-one">{blockTwo}</h1>
            </div>
          </Link>
          <Link to={"/resources/glossary/" + nodes[2].slug}>
            <div className="marquee">
              <h1 className="text-path-one">{blockThree}</h1>
            </div>
          </Link>
          <Link to={"/resources/glossary/" + nodes[3].slug}>
            <div className="marquee">
              <h1 className="text-path-one">{blockFour}</h1>
            </div>
          </Link>
        </Col>
      </Row>
      <Row className="cta-row">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="cta">
            <Link to="/resources/educational-writing" className="underline">
              Our Educational Writings
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(ResourcesMarquee)
