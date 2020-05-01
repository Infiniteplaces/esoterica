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

import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/advisorySolutions/advisorySolutionsFooterCta.png"

import arrow from "../../images/icons/arrow-bent.svg"

class LibraryPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const heroImage = get(this, "props.data.file.childImageSharp.fluid")
    const featured = library.filter(i => i.node.featured === true)

    return (
      <Layout navTheme="dark" location={this.props.location}>
        <SEO title="Library" />
        <Helmet title={siteTitle} />
        <div id="libraryPage">
          <div className="hero">
            <Img className="hero-img" fluid={heroImage} />
            <div className="hero-title">
              <h1 className="section">Library</h1>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
          <div className="body-container">
            <LibraryFourPost posts={featured} color={"#fdfc71"} />
            <LibraryTwoPost posts={featured} />
            <LibraryFeatured posts={featured} />
            <EmailCapture />
            <LibraryFourPost posts={featured} color={"#3FFF18"} />
            <LibraryTwoPost posts={featured} />
            <ResourcesMarquee />
            <SoftFooterCta
              background={softFooterBg}
              text={"How we can work together"}
              ctaLead={"See"}
              cta={"Advisory Solutions"}
              link={"/advisorySolutions"}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default LibraryPage

export const libraryQuery = graphql`
  query LibraryIndexQuery {
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
    file(relativePath: { eq: "resources/library-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
