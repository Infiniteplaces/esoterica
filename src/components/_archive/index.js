import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../../components/_global/layout"
import Image from "../../../components/_global/image"
import SEO from "../../../components/_global/seo"
import EmailCapture from "../../../components/_global/emailCapture"
import ResourcesMarquee from "../../../components/_global/resourcesMarquee"
import SoftFooterCta from "../../../components/_global/softFooterCta"

import ArtcilePreview from "../../../components/resources/articlePreview"
import LibraryFourPost from "../../../components/resources/libraryFourPost"
import LibraryTwoPost from "../../../components/resources/libraryTwoPost"
import LibraryFeatured from "../../../components/resources/libraryFeatured"
import LibraryFiltered from "../../../components/resources/libraryFiltered"

import LibraryIndex from "../../../components/resources/libraryIndex"

import softFooterBg from "../../../images/investorSolutions/investorSolutionsFooterCta.png"
import arrow from "../../../images/icons/arrow-bent.svg"
import exit from "../../../images/icons/list-exit.svg"

class LibraryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterTags: [],
      showFilterTags: false,
    }
    this._editFilterTags = this._editFilterTags.bind(this)
  }

  _editFilterTags(tag) {
    if (this.state.filterTags.includes(tag)) {
      this.setState({
        filterTags: this.state.filterTags.filter(e => e !== tag),
      })
    } else {
      this.setState({ filterTags: this.state.filterTags.concat(tag) })
    }
  }

  render() {
    //// Import state
    let { filterTags, showFilterTags } = this.state
    let { pageContext, location } = this.props
    console.log(pageContext)

    //// Organize content from graphql & filtered data
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const heroImage = get(this, "props.data.file.childImageSharp.fluid")
    const featured = library.filter(i => i.node.featured === true)

    //// Logic to match articles to filter tags
    let filteredPosts
    if (filterTags.length) {
      filteredPosts = library.filter(i => {
        let { tags } = i.node
        if (tags) {
          for (let i = 0; i < tags.length; i++) {
            for (let j = 0; j < filterTags.length; j++) {
              if (tags[i] === filterTags[j]) {
                return true
              }
            }
          }
          return false
        }
      })
    }

    //// Create list of available tags from the CMS
    let availableTags = []
    library.forEach(i => {
      if (i.node.tags) {
        i.node.tags.forEach(t => {
          availableTags.push(t)
        })
      }
    })
    availableTags = [...new Set(availableTags)]

    //// Create render for list of tags
    let tagOptions = availableTags.map((i, idx) => {
      let active = filterTags.includes(i)
      return (
        <div
          key={idx}
          className={"tag body-small " + (active ? "active" : "")}
          onClick={() => this._editFilterTags(i)}
        >
          {i}
        </div>
      )
    })

    //// Create unfiltered page view
    let unfiltered = (
      <>
        <LibraryFourPost posts={featured} color={"#fdfc71"} />
        <LibraryTwoPost posts={featured} />
        <LibraryFeatured posts={featured} />
        <EmailCapture />
        <LibraryFourPost posts={featured} color={"#3FFF18"} />
        <LibraryTwoPost posts={featured} />
      </>
    )

    let filtered = <LibraryFiltered posts={filteredPosts} />

    let pageRender = filterTags.length ? filtered : unfiltered

    return (
      <Layout navTheme="dark" location={location}>
        <SEO title="Library" />
        <div id="libraryPage">
          <div className="hero">
            <Img className="hero-img" fluid={heroImage} />
            <div className="hero-title">
              <h1 className="section">Library</h1>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
          <div className="body-container">
            <div className="sort-container">
              <div className="filter-tag-container">
                {showFilterTags ? (
                  <div className="tag-container">
                    <img
                      src={exit}
                      alt=""
                      className="mr-2"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        this.setState({
                          filterTags: [],
                          showFilterTags: false,
                        })
                      }}
                    />
                    {tagOptions}
                  </div>
                ) : (
                  <h4
                    className="underline"
                    onClick={() =>
                      this.setState({ showFilterTags: !showFilterTags })
                    }
                  >
                    Filter by Type
                  </h4>
                )}
              </div>
              <div className="search-container">
                <h4 className="underline">Search</h4>
              </div>
            </div>
            {pageRender}
            <ResourcesMarquee />
            <SoftFooterCta
              background={softFooterBg}
              text={"How we can work together"}
              ctaLead={"See"}
              cta={"Advisory Solutions"}
              link={"/investorSolutions"}
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
