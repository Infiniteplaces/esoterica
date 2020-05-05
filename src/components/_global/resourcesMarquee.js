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
              src
            }
          }
        }
      }
    }
  `)
  let { nodes } = data.allContentfulGlossary

  let p =
    "WTF is an ETF? Why the future looks bright for traded investments. Why Morgan Stanley’s E*Trade deal means bigger banks"
  return (
    <Container fluid id="resourcesMarquee">
      <Row className="marquee-row">
        <Col md={{}} className="marquee-container">
          <Link to={"/resources/glossary/" + nodes[0].slug}>
            <div className="marquee">
              <h1 className="text-path-one">
                <img
                  src={nodes[0].heroImage.fixed.src}
                  alt=""
                  className="mr-3"
                />
                {nodes[0].title}
              </h1>
            </div>
          </Link>
        </Col>
      </Row>
      <Row className="cta-row">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="cta">
            <Link to="/" className="underline">
              View All Resources
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(ResourcesMarquee)
