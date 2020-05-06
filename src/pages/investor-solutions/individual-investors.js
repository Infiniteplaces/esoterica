import React from "react"
import { Link, useStaticQuery } from "gatsby"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"

import Layout from "../../components/_global/layout"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/investorSolutions/previewPill"
import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta_2.png"

import LibraryFeatured from "../../components/resources/libraryFeatured"

import arrow_black from "../../images/icons/arrow-diag-black.svg"
import arrow_white from "../../images/icons/arrow-diag.svg"

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
                <h3>Contact Us</h3>
                <p>
                  <strong>Contact us at: 866-979-1710</strong>
                </p>
                <p>
                  <strong>
                    Email us at:{" "}
                    <a
                      className="underline"
                      href="mailto:bruce.liu@esotericacap.com"
                    >
                      bruce.liu@esotericacap.com
                    </a>
                  </strong>
                </p>
              </Col>
            </Row>
            <Row className="contact-row">
              <Col>
                <a
                  href="mailto:info@esotericacap.com"
                  className="button secondary"
                >
                  Start The Conversation
                </a>
              </Col>
            </Row>
          </Container>
          <EmailCapture />
          <ResourcesMarquee />
          <SoftFooterCta
            background={softFooterBg}
            text={"Steady stream of the best financial content"}
            ctaLead={"Check out the"}
            cta={"Library"}
            link={"/resources/library"}
          />
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
