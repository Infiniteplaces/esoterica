import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import SEO from "../components/_global/seo"
import Image from "../components/_global/image"
import Layout from "../components/_global/layout"
import EmailCapture from "../components/_global/emailCapture"
import SoftFooterCta from "../components/_global/softFooterCta"
import ResourcesMarquee from "../components/_global/resourcesMarquee"

import LibraryTwoPost from "../components/resources/libraryTwoPost"
import ArtcilePreview from "../components/resources/articlePreview"
import LibraryFourPost from "../components/resources/libraryFourPost"
import LibraryFeatured from "../components/resources/libraryFeatured"

import exit from "../images/icons/list-exit.svg"
import arrow from "../images/icons/arrow-bent.svg"
import arrow_right from "../images/icons/arrow-right.svg"
import arrow_left from "../images/icons/arrow-left.svg"
import search from "../images/icons/search.svg"
import softFooterBg from "../images/investorSolutions/investorSolutionsFooterCta.png"

class LibraryIndex extends React.Component {
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
    let {
      humanPageNumber,
      pageNumber,
      limit,
      numberOfPages,
      nextPagePath,
      previousPagePath,
    } = pageContext

    //// Organize content from graphql & filtered data
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const heroImage = get(this, "props.data.file.childImageSharp.fluid")
    const featured = library.filter(i => i.node.featured === true)

    let articleCount = library.length

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
          className={
            "position-relative tag body-small " + (active ? "active" : "")
          }
          onClick={() => this._editFilterTags(i)}
        >
          {i}
          {active ? (
            <img
              src={exit}
              alt=""
              style={{
                position: "absolute",
                width: "15px",
                top: "-5px",
                right: "0px",
              }}
            />
          ) : (
            ""
          )}
        </div>
      )
    })

    //// Create Pagination Logic
    let slice_start = pageNumber * limit
    let slice_end = humanPageNumber * limit
    let pageArticles = library.slice(slice_start, slice_end)

    let pagination =
      numberOfPages > 1 ? (
        <div className="pagination">
          <div className="eyebrow">PAGE</div>
          <div className="pages">
            <div className="page-back">
              {previousPagePath !== "" ? (
                <Link to={previousPagePath}>Previous</Link>
              ) : (
                <div className="disabled">Previous</div>
              )}
            </div>
            {[...Array(numberOfPages).keys()].map((i, idx) => {
              let current = i + 1
              let path = i === 0 ? "" : current
              return (
                <div
                  key={idx}
                  className={
                    "page-number " + (i === pageNumber ? "active" : "")
                  }
                >
                  <Link to={"/resources/library/" + path}>{current}</Link>
                </div>
              )
            })}
            <div className="page-next">
              {nextPagePath !== "" ? (
                <Link to={nextPagePath}>Next</Link>
              ) : (
                <div className="disabled">Next</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )

    console.log(pageArticles)

    //// Create unfiltered page view
    let unfiltered = (
      <>
        <LibraryTwoPost posts={pageArticles.slice(0, 3)} />
        <LibraryTwoPost posts={pageArticles.slice(3, 6)} />
        <LibraryTwoPost posts={pageArticles.slice(6, 9)} />
        <LibraryTwoPost posts={pageArticles.slice(9, 12)} />
        <LibraryTwoPost posts={pageArticles.slice(12, 15)} />
        {pagination}
        <LibraryFeatured posts={featured} />
        <EmailCapture color={"#fdfc71"} text={"#000"} />
      </>
    )

    let filtered = <LibraryTwoPost posts={filteredPosts} />

    let pageRender = filterTags.length ? filtered : unfiltered

    return (
      <Layout navTheme="dark" location={location}>
        <SEO title="Library" />
        <div id="libraryPage">
          <div className="hero">
            <div className="overlay" />
            <Img className="hero-img" fluid={heroImage} />
            <div className="hero-title">
              <div className="d-flex">
                <h1 className="section">Library</h1>
                <img src={arrow} alt="" className="arrow" />
              </div>
              <div className="my-5">
                <h2>
                  Original research is in our DNA.
                  <br />
                  Sharing it, betters us.
                </h2>
              </div>
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
                      className="mr-2 mb-2"
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
                  <>
                    <h4
                      className="underline"
                      onClick={() =>
                        this.setState({ showFilterTags: !showFilterTags })
                      }
                    >
                      Filter by Type
                      <img src={search} alt="" width="24" className="ml-3" />
                    </h4>
                  </>
                )}
              </div>
            </div>
            {pageRender}
            <ResourcesMarquee />
            <SoftFooterCta
              background={softFooterBg}
              text={"How we can work together"}
              ctaLead={"See"}
              cta={"Our Solutions"}
              link={"/our-solutions"}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default LibraryIndex

export const IndexBlogQuery = graphql`
  query IndexBlogQuery {
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
