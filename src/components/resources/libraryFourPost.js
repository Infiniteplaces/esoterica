import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import hero from "../../images/investorSolutions/assetAllocationHero.jpg"
import illustration from "../../images/homepage/world_illus.png"

const LibraryFourPost = ({ posts, color = "#fdfc71", featured = false }) => {
  let f2 = posts[0].node
  let f3 = posts[1].node
  let f1, f4
  if (featured) {
    f4 = {
      title: "Let's Talk 5G",
      description: {
        description:
          "The world is on a fast track to a 5G-enabled digital economy. We are capturing the growth.",
      },
      slug: "/our-solutions/our-newest-fund",
    }
    f1 = {
      title: "Let's Talk Asset Allocation",
      slug: "/our-solutions/lets-talk-asset-allocation",
    }
  }
  return (
    <Container fluid id="libraryFourPost">
      <Row>
        <Col xs="12" md="4">
          <Link to={f1.slug}>
            <div className="wrapper">
              <div
                className="post-container tall"
                style={{ backgroundImage: `url(${hero})` }}
              >
                <div className="post-text-container">
                  <div className="tag-container"></div>
                  <h2 className="post-title">{f1.title}</h2>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col md="4">
          <div className="post-container center">
            <div className="top-container">
              <Link to={"/resources/library/" + f2.slug}>
                <div className="wrapper">
                  <div
                    className="container-image"
                    style={{
                      backgroundImage: `url(${f2.heroImage.fluid.src})`,
                    }}
                  />
                </div>

                <div className="post-text-container">
                  <div className="tag-container">
                    {f2.tags
                      ? f2.tags.slice(0, 1).map((i, idx) => {
                          return (
                            <div key={idx} className="tag body-small">
                              {i}
                            </div>
                          )
                        })
                      : ""}
                  </div>
                  <span className="post-title">{f2.title}</span>
                </div>
              </Link>
            </div>
            <div className="bottom-container">
              <Link to={"/resources/library/" + f3.slug}>
                <div className="wrapper">
                  <div
                    className="container-image"
                    style={{
                      backgroundImage: `url(${f3.heroImage.fluid.src})`,
                    }}
                  />
                </div>

                <div className="post-text-container">
                  <div className="tag-container">
                    {f3.tags
                      ? f3.tags.slice(0, 1).map((i, idx) => {
                          return (
                            <div key={idx} className="tag body-small">
                              {i}
                            </div>
                          )
                        })
                      : ""}
                  </div>
                  <span className="post-title">{f3.title}</span>
                </div>
              </Link>
            </div>
          </div>
        </Col>
        <Col md="4">
          <Link to={featured ? f4.slug : "/resources/library/" + f4.slug}>
            <div className="post-container tall right">
              <div
                className="container-image"
                style={{ backgroundColor: color }}
              >
                <h3 className="description">{f4.description.description}</h3>
                <img src={illustration} alt="" className="align-self-center" />
                <div className="post-text-container">
                  <h2 className="post-title">{f4.title}</h2>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(LibraryFourPost)
