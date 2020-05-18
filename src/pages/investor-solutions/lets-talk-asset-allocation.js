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

class LetsTalkAssetAllocation extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout navTheme="dark">
        <SEO title="Let's Talk Asset Allocation" />
        <div id="assetAllocation">
          <div className="hero">
            <Img
              className="hero-img"
              fluid={this.props.data.file.childImageSharp.fluid}
            />
            <h1 className="title">Let's Talk Asset Allocation</h1>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <h2>
                  Esoterica offers asset allocation solutions through separately
                  managed accounts and investment products (funds, ETFs).
                </h2>
                <p>
                  Our asset allocation solution rotates between stocks and
                  bonds, as market conditions suggest. There is always some
                  segment of the market that is outperforming, and our asset
                  allocation investment solution seeks to identify and capture
                  this outperformance by dynamically adapting the risk profile
                  to changing market conditions. The asset allocation solution
                  seeks to generate S&P 500 equity-like returns, with less
                  downside risk, where improved capital preservation is achieved
                  through the dynamic allocation process.
                </p>
                <p>
                  We use monthly re-balancing to assess the current macro
                  environment from a variety of perspectives: both fundamental
                  and technical. We focus on the behavior of high beta equities
                  versus low beta, equal weighted indices relative to
                  capitalization weighted indices, the activity within the
                  credit markets, the conduct of interest rates, exchange rates,
                  commodities, etc. We are looking for reinforcing “risk-on/off”
                  signals. The investment philosophy is simple and intuitive:
                  the more reinforcing the signal, the more aggressive our risk
                  profile.
                </p>
                <h3>Learn More:</h3>
                <ul>
                  <li>
                    <Link to="/resources/white-papers/asset-allocation-diversification">
                      Asset Allocation for Diversification: Core vs. Satellite
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/white-papers/tutorial-on-risk-factors">
                      A Primer on Risk Factors
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/white-papers/Portfolio-Construction">
                      How to Construct a Portfolio
                    </Link>
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

export default LetsTalkAssetAllocation

export const LetsTalkAssetAllocationQuery = graphql`
  query LetsTalkAssetAllocationQuery {
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
    file(relativePath: { eq: "investorSolutions/assetAllocationHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
