import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const GlossaryPreview = ({ glossary }) => {
  let display = glossary.map((i, idx) => {
    let { node } = i
    return (
      <div key={idx} className="glossaryPreviewRow">
        <Link className="previewItem" to={"/resources/glossary/" + node.slug}>
          <h1 className="">{node.title}</h1>
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
