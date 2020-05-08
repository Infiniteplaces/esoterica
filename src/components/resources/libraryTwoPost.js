import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const LibraryTwoPost = ({ posts, mobile }) => {
  if (posts.length === 0) {
    return ""
  }

  let display = posts.map((i, idx) => {
    return (
      <Col key={idx} xs="6">
        <div className="post-container">
          <Link to={"/resources/library/" + i.node.slug}>
            <div className="wrapper">
              <div
                className="container-image"
                style={{
                  backgroundImage: `url(${i.node.heroImage.fluid.src})`,
                }}
              />
            </div>

            <div className="post-text-container">
              <div className="tag-container">
                {i.node.tags
                  ? i.node.tags.map((i, idx) => {
                      return (
                        <div key={idx} className="tag body-small">
                          {i}
                        </div>
                      )
                    })
                  : ""}
              </div>
              {mobile ? (
                <div className="post-title body-small">{i.node.title}</div>
              ) : (
                <h3 className="post-title">{i.node.title}</h3>
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
)(LibraryTwoPost)
