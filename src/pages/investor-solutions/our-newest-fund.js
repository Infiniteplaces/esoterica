import React from "react"
import { Link, useStaticQuery } from "gatsby"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"

import Layout from "../../components/_global/layout"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/investorSolutions/previewPill"
import EmailCapture from "../../components/_global/emailCapture"

import LibraryFeatured from "../../components/resources/libraryFeatured"

import arrow_black from "../../images/icons/arrow-diag-black.svg"
import arrow_white from "../../images/icons/arrow-diag.svg"
import phone_black from "../../images/icons/phone.svg"
import phone_white from "../../images/icons/phone-white.svg"
import mail_black from "../../images/icons/mail.svg"
import mail_white from "../../images/icons/mail-white.svg"

class OurNewestFundPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout navTheme="dark">
        <SEO title="Our Newest Fund" />
        <div id="ourNewestFund">
          <div className="hero">
            <Img
              className="hero-img"
              fluid={this.props.data.file.childImageSharp.fluid}
            />
            <h1 className="title">How Esoterica captures the 5G Opportunity</h1>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <h2>
                  5G is much more than an upgrade to wireless cellular networks.
                </h2>
                <p>
                  We believe that the most value creation is not with the
                  carriers – notwithstanding what their public pronouncements
                  may imply. Value resides with the transformative technologies
                  that are creating a new generation of semiconductors that
                  power 5G; a new cloud computing architecture that’s moving to
                  the edge to optimize the benefits of faster speeds, latency,
                  capacity; software to filter and process vast quantities of
                  data in real-time; and, enabling technologies such as
                  streaming, smart homes, smart factories, remote healthcare,
                  autonomous vehicles, AR/VR - and applications that have
                  yet-to-be-created.
                </p>
                <p>
                  Our investment process is underpinned by fundamental research,
                  conducted by analysts on the ground in the U.S. and Asia – the
                  two leading regions in the 5G race. Our investment approach is
                  both “top-down” to identify the above-mentioned sectors and
                  “bottom-up”, to identify companies that are attractively
                  valued and well-positioned. Technologies leveraging the next
                  generation of connectivity are fast-evolving, and the
                  perception of investors ever-changing (and often
                  misunderstood), such that actively rotating between the
                  sectors (and therefore companies) is a meaningful source of
                  returns.
                </p>
                <ul>
                  <li>
                    <strong>How to capture the 5G opportunities? </strong>
                    First, think globally – 4G was largely the U.S. focused; 5G
                    adoption will be global from the outset. Second, think
                    top-down – allocate dynamically to “5G sectors” described
                    below, as the technology evolves. Third, think bottom-up –
                    invest in fundamentally superior companies within each “5G
                    sector”. 
                  </li>
                  <li>
                    <strong>
                      5G is not a light-switch; it is an evolution.
                    </strong>
                    We categorize the impact of 5G technology in four main
                    categories/sectors: (1) New Semiconductors, (2) Cloud & Edge
                    Computing, (3) SaaS & (4) Enabling Technology. We invest in
                    all of the “sectors,” with allocations adjusted in-line with
                    the development of the 5G cycle.
                  </li>
                  <li>
                    <strong>Semis are the nucleus of the 5G ecosystem.</strong>
                    Every existing device and every facet of the 5G cycle has to
                    be upgraded with new semiconductor technology to run faster
                    and smarter, all while being more energy-efficient. 5G will
                    require a massive expansion of semiconductor content.
                  </li>
                  <li>
                    <strong>Cloud giants push into Edge Computing.</strong>
                    Edge computing and 5G are interlinked technologies as both
                    are poised to significantly improve the performance of
                    applications (faster speed) and enable huge amounts of data
                    to be processed in real-time (low latency). Applications
                    running on edge locations demand lower latency and reduced
                    bandwidth.
                  </li>
                  <li>
                    <strong>What does software have to do with 5G? </strong>
                    5G will result in a massive amount of new data. The ability
                    to continuously filter and process this new data, in
                    real-time, will be critical, particularly for A.I. and
                    machine learning applications. A new generation of database
                    platforms, big data analytics, and agile software
                    development tools are emerging to help individuals and
                    businesses build digital experiences in the context of
                    5G/edge computing.
                  </li>
                  <li>
                    <strong>Enabling technologies.</strong>
                    Eventually, once all of the 5G building blocks are in place,
                    the big winners will be the enabling technologies (think of
                    Instagram and Netflix in the 4G cycle), giving rise to a
                    wave of new 5G business applications, devices, and services:
                    smart homes, smart factories, remote healthcare, autonomous
                    vehicles, AR/VR - and applications that have
                    yet-to-be-created.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="contact-row">
              <Col className="call-cta">
                <a href="tel:866-979-1710" className="button secondary">
                  Call Us
                  <img
                    src={phone_black}
                    className="ml-4 pb-1 icon-black"
                    alt=""
                  />
                  <img
                    src={phone_white}
                    className="ml-4 pb-1 icon-white"
                    alt=""
                  />
                </a>
              </Col>
              <Col className="mail-cta">
                <a
                  href="mailto:info@esotericacap.com"
                  className="button secondary"
                >
                  Email Us
                  <img
                    src={mail_black}
                    className="ml-4 pb-1 icon-black"
                    alt=""
                  />
                  <img
                    src={mail_white}
                    className="ml-4 pb-1 icon-white"
                    alt=""
                  />
                </a>
              </Col>
            </Row>
          </Container>
          <EmailCapture />
        </div>
      </Layout>
    )
  }
}

export default OurNewestFundPage

export const OurNewestFundQuery = graphql`
  query OurNewestFundQuery {
    allContentfulLibrary(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          featured
          description {
            description
          }
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: "investorSolutions/newestFundHero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
