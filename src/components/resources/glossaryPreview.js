import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const GlossaryPreview = ({ glossary }) => {
  let display = glossary.map((i, idx) => {
    let { node } = i
    let article = [...Array(50).keys()].map((i, idx) => {
      return (
        <span key={idx}>
          <Img fixed={node.heroImage.fixed} alt="article preview" />
          <h1>{node.title}</h1>
        </span>
      )
    })
    return (
      <div key={idx} className="glossaryPreviewRow">
        <Link
          className="previewItem"
          to={"/resources/white-papers/" + node.slug}
        >
          {article}
        </Link>
      </div>
    )
  })
  return (
    <Container fluid id="glossaryPreview" className="px-0">
      <Row className="w-100 mx-0">
        <Col className="px-0">{display}</Col>
      </Row>
    </Container>
  )
}

export default GlossaryPreview
