import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const LibraryTwoPost = ({ posts, mobile }) => {
  const post_one = posts[0].node
  const post_two = posts[1].node
  return (
    <Container fluid id="libraryTwoPost">
      <Row>
        <Col xs="6">
          <div className="post-container">
            <Link to={"/resources/library/" + post_one.slug}>
              <div
                className="container-image"
                style={{
                  backgroundImage: `url(${post_one.heroImage.fluid.src})`,
                }}
              />
              <div className="post-text-container">
                <div className="tag-container">
                  {post_one.tags.length > 0
                    ? post_one.tags.map((i, idx) => {
                        return (
                          <div key={idx} className="tag body-small">
                            {i}
                          </div>
                        )
                      })
                    : ""}
                </div>
                {mobile ? (
                  <div className="post-title body-small">{post_one.title}</div>
                ) : (
                  <h3 className="post-title">{post_one.title}</h3>
                )}
              </div>
            </Link>
          </div>
        </Col>
        <Col xs="6">
          <div className="post-container">
            <Link to={"/resources/library/" + post_two.slug}>
              <div
                className="container-image"
                style={{
                  backgroundImage: `url(${post_two.heroImage.fluid.src})`,
                }}
              />
              <div className="post-text-container">
                <div className="tag-container">
                  {post_two.tags.length > 0
                    ? post_two.tags.map((i, idx) => {
                        return (
                          <div key={idx} className="tag body-small">
                            {i}
                          </div>
                        )
                      })
                    : ""}
                </div>
                {mobile ? (
                  <div className="post-title body-small">{post_two.title}</div>
                ) : (
                  <h3 className="post-title">{post_two.title}</h3>
                )}
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryTwoPost)
