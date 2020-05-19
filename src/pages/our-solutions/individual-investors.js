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

class IndividualInvestorsPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout navTheme="dark">
        <SEO title="Individual Investors" />
        <div id="individualInvestors">
          <div className="hero">
            <Img
              className="hero-img"
              fluid={this.props.data.file.childImageSharp.fluid}
            />
            <h1 className="title">Individual Investors</h1>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <p>
                  We are an extension of you. We share the same beliefs and
                  principles that you hold dear and cherish. We want to help
                  build wealth. We believe the first, and most important step
                  towards building wealth, is wealth preservation.
                </p>
                <p>
                  Our overall goal is to make investing simple. We are adamant
                  about leveling the playing field. Whether you are an
                  individual investor or a full-time investment professional,
                  our ambition is to democratize the investment landscape for
                  all. We provide insights, tools and solutions that were
                  previously mainly restricted to large institutional investors.
                </p>
                <p>
                  We discuss all relevant news items in a timely and
                  easy-to-understand manner. We examine topics that are moving
                  markets today, as well as, potential oncoming obstacles and
                  opportunities. Our plain-spoken insights, which are often
                  intertwined with humor, are available in written, audio, or
                  video form. Never feel intimidated, overwhelmed, or bewildered
                  again!
                </p>
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

export default IndividualInvestorsPage

export const IndividualInvestorsQuery = graphql`
  query IndividualInvestorsQuery {
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
    file(
      relativePath: { eq: "investorSolutions/individualInvestorsHero.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
