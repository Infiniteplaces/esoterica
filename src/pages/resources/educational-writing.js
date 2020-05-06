import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

import ArtcilePreview from "../../components/resources/articlePreview"
import LibraryFourPost from "../../components/resources/libraryFourPost"
import LibraryTwoPost from "../../components/resources/libraryTwoPost"
import LibraryFeatured from "../../components/resources/libraryFeatured"

import GlossaryPreview from "../../components/resources/glossaryPreview"

import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta.png"

import arrow from "../../images/icons/arrow-bent-black.svg"

class GlossaryPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const glossary = get(this, "props.data.allContentfulGlossary.edges")
    const heroImage = get(this, "props.data.file.childImageSharp.fluid")
    const featured = library.filter(i => i.node.featured === true)

    return (
      <Layout location={this.props.location}>
        <SEO title="Educational Writing" />
        <Helmet title={siteTitle} />
        <div id="glossaryPage">
          <div className="hero">
            <div className="hero-title">
              <h1 className="section">Educational Writing</h1>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
          <div className="body-container">
            <GlossaryPreview glossary={glossary} />
            <LibraryFeatured posts={featured} />
            <EmailCapture />
            <ResourcesMarquee />
            <SoftFooterCta
              text={"Steady stream of the best financial content"}
              ctaLead={"Check out the"}
              cta={"Library"}
              link={"/resources/library"}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default GlossaryPage

export const glossaryPageQuery = graphql`
  query glossaryPageQuery {
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
    allContentfulGlossary(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          description {
            description
          }
          publishDate(formatString: "MMMM Do, YYYY")

          heroImage {
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
