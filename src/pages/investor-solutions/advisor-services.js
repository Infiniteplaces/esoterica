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
                  We are committed to supporting financial advisors and
                  registered investment advisors through content and
                  accessibility to our investment professionals.
                </p>
                <p>
                  Where desired, we are willing to create bespoke solutions for
                  Advisor platforms.
                </p>
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
    file(relativePath: { eq: "investorSolutions/advisorServicesHero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
