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

class InstitutionalInvestorsPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout navTheme="dark">
        <SEO title="Institutional Investors" />
        <div id="individualInvestors">
          <div className="hero">
            <Img
              className="hero-img"
              fluid={this.props.data.file.childImageSharp.fluid}
            />
            <h1 className="title">Institutional Investors</h1>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <p>
                  We serve institutional investors through separate accounts as
                  well as investment products (exchange-traded funds, mutual
                  funds).
                </p>
                <p>
                  Esoterica’s core offering is an asset allocation solution that
                  rotates between global major asset classes. There is always
                  some segment of the marketplace that is outperforming, and our
                  asset allocation solution seeks to identify and capture this
                  outperformance by dynamically adapting the risk profile to
                  changing market conditions.
                </p>
                <p>
                  The asset allocation solution not only seeks to outperform the
                  60/40 benchmark but also to generate S&P 500 equity-like
                  returns, with less downside risk, where the improved capital
                  preservation is achieved through the dynamic allocation
                  process.
                </p>
                <p>
                  Esoterica’s equity research teams – based in the U.S. and
                  China – seek out companies that are at the forefront of the
                  new digital economy. One of the transformational drivers of
                  change is 5G and the companies that are capturing the most
                  value from it.
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

export default InstitutionalInvestorsPage

export const InstitutionalInvestorsQuery = graphql`
  query InstitutionalInvestorsQuery {
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
      relativePath: { eq: "investorSolutions/institutionalInvestorsHero.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
