import React from "react"
import { Link, useStaticQuery } from "gatsby"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"

import Layout from "../../components/_global/layout"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/advisorySolutions/previewPill"
import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/advisorySolutions/advisorySolutionsFooterCta_2.png"

import LibraryFeatured from "../../components/resources/libraryFeatured"

import arrow_black from "../../images/icons/arrow-diag-black.svg"
import arrow_white from "../../images/icons/arrow-diag.svg"

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
            <h1 className="title">
              Institutional
              <br />
              Investors
            </h1>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <p>
                  We serve institutional investors through separate accounts as
                  well as investment products (exchange traded funds, mutual
                  funds).
                </p>
                <p>
                  Esoterica’s core offering is an asset allocation solution that
                  rotates between stocks and bonds as market conditions suggest,
                  not only to outperform the 60/40 benchmark, but also to
                  generate S&P 500 equity-like returns, with less downside risk,
                  where the improved capital preservation is achieved through
                  the dynamic allocation process.
                </p>
                <p>
                  There is always some segment of the marketplace that is
                  outperforming, and our asset allocation investment solution
                  seeks to identify and capture this outperformance by
                  dynamically adapting the risk profile to changing market
                  conditions.
                </p>
                <p>
                  Esoterica’s equity research teams – based in the US and China
                  – seek out companies that are at the forefront of the new
                  digital economy. One of the transformational drivers of change
                  is 5G, and the companies that are capturing the most value
                  from it.
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
      relativePath: { eq: "advisorySolutions/institutionalInvestorsHero.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
