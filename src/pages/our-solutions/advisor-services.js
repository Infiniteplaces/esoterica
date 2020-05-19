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

class AdvisorServicesPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout navTheme="dark">
        <SEO title="Advisor Services" />
        <div id="advisorServices">
          <div className="hero">
            <Img
              className="hero-img"
              fluid={this.props.data.file.childImageSharp.fluid}
            />
            <h1 className="title">Advisor Services</h1>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <p>
                  We support financial advisors and registered investment
                  advisors – small and large – with published research (in
                  written and AV format), webinars and access to our senior
                  investment professionals. We understand the need to
                  collaboratively interpret fast changing global economic and
                  political events and will selectively make ourselves
                  available, where needed and desired, for your key clients and
                  prospects.
                </p>
                <p>
                  As befitting our investment thesis about the prevalence of the
                  digital economy, we will work with you to bring the best of
                  institutional asset management to your clients.
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

export default AdvisorServicesPage

export const AdvisoryServicesQuery = graphql`
  query AdvisoryServicesQuery {
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
    file(relativePath: { eq: "investorSolutions/investorServicesHero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
