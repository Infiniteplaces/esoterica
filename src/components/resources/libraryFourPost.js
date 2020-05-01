import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const LibraryFourPost = ({ posts, color = "#fdfc71" }) => {
  const f1 = posts[0].node
  const f2 = posts[1].node
  const f3 = posts[2].node
  const f4 = posts[3].node
  return (
    <Container fluid id="libraryFourPost">
      <Row>
        <Col xs="12" md="4">
          <Link to={"/resources/library/" + f1.slug}>
            <div
              className="post-container left"
              style={{ backgroundImage: `url(${f1.heroImage.fluid.src})` }}
            >
              <div className="post-text-container">
                <div className="tag-container">
                  {f1.tags.length > 0
                    ? f1.tags.map((i, idx) => {
                        return (
                          <div key={idx} className="tag body-small">
                            {i}
                          </div>
                        )
                      })
                    : ""}
                </div>
                <h2 className="post-title">{f1.title}</h2>
              </div>
            </div>
          </Link>
        </Col>
        <Col md="4">
          <div className="post-container center">
            <div className="top-container">
              <Link to={"/resources/library/" + f2.slug}>
                <div
                  className="container-image"
                  style={{ backgroundImage: `url(${f2.heroImage.fluid.src})` }}
                />
                <div className="post-text-container">
                  <div className="tag-container">
                    {f2.tags.length > 0
                      ? f2.tags.map((i, idx) => {
                          return (
                            <div key={idx} className="tag body-small">
                              {i}
                            </div>
                          )
                        })
                      : ""}
                  </div>
                  <h4 className="post-title">{f2.title}</h4>
                </div>
              </Link>
            </div>
            <div className="bottom-container">
              <Link to={"/resources/library/" + f3.slug}>
                <div
                  className="container-image"
                  style={{ backgroundImage: `url(${f3.heroImage.fluid.src})` }}
                />
                <div className="post-text-container">
                  <div className="tag-container">
                    {f3.tags.length > 0
                      ? f3.tags.map((i, idx) => {
                          return (
                            <div key={idx} className="tag body-small">
                              {i}
                            </div>
                          )
                        })
                      : ""}
                  </div>
                  <h4 className="post-title">{f3.title}</h4>
                </div>
              </Link>
            </div>
          </div>
        </Col>
        <Col md="4">
          <Link to={"/resources/library/" + f4.slug}>
            <div className="post-container right">
              <div
                className="container-image"
                style={{ backgroundColor: color }}
              >
                <h3 className="description">{f4.description.description}</h3>
              </div>
              <div className="post-text-container">
                <div className="tag-container">
                  {f4.tags.length > 0
                    ? f4.tags.map((i, idx) => {
                        return (
                          <div key={idx} className="tag body-small">
                            {i}
                          </div>
                        )
                      })
                    : ""}
                </div>
                <h4 className="post-title">{f4.title}</h4>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(LibraryFourPost)
