import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const LibraryFiltered = ({ posts, mobile }) => {
  let display = posts.map((i, idx) => {
    let { node } = i
    return (
      <Col key={idx} xs="6">
        <div className="post-container">
          <Link to={"/resources/library/" + node.slug}>
            <div className="wrapper">
              <div
                className="container-image"
                style={{
                  backgroundImage: `url(${node.heroImage.fluid.src})`,
                }}
              />
            </div>
            <div className="post-text-container">
              <div className="tag-container">
                {node.tags.length > 0
                  ? node.tags.map((i, idx) => {
                      return (
                        <div key={idx} className="tag body-small">
                          {i}
                        </div>
                      )
                    })
                  : ""}
              </div>
              {mobile ? (
                <div className="post-title body-small">{node.title}</div>
              ) : (
                <h3 className="post-title">{node.title}</h3>
              )}
            </div>
          </Link>
        </div>
      </Col>
    )
  })
  return (
    <Container fluid id="libraryTwoPost">
      <Row>{display}</Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryFiltered)
