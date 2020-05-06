import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const LibraryThumbnails = ({ posts, mobile }) => {
  console.log(posts)
  let display = posts.slice(0, 6).map((i, idx) => {
    let border_bottom = idx < 3 ? true : false
    let border_right = true
    if (idx === 5 || idx === 2) {
      border_right = false
    }
    return (
      <Col
        md="4"
        key={idx}
        className={
          idx + " thumbnail " + (border_bottom ? " bottom-border " : "")
        }
      >
        <div className="wrapper">
          <div
            className="container-image"
            style={{
              backgroundImage: `url(${i.node.heroImage.fluid.src})`,
            }}
          />
        </div>
        <div
          className={"text-container " + (border_right ? " right-border " : "")}
        >
          <div className="tag-container">
            {i.node.tags
              ? i.node.tags.slice(0, 1).map((i, idx) => {
                  return (
                    <div key={idx} className="tag body-small">
                      {i}
                    </div>
                  )
                })
              : ""}
          </div>
          <div>{i.node.title}</div>
        </div>
      </Col>
    )
  })
  return (
    <Container fluid id="libraryThumbnails">
      <Row>{display}</Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryThumbnails)
