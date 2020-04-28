import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import ArtcilePreview from "../../components/resources/articlePreview"
import LibraryFeatured from "../../components/resources/libraryFeatured"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

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
            <LibraryFeatured posts={featured} />
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
