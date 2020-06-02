import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { graphql, Link, useStaticQuery } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../_global/layout"
import SEO from "../_global/seo"
import { Container, Row, Col } from "reactstrap"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ReactPlayer from "react-player"
import SpotifyPlayer from "react-spotify-player"

import linkedin_black from "../../images/icons/linkedin.svg"
import youtube_black from "../../images/icons/youtube.svg"
import twitter_black from "../../images/icons/twitter.svg"
import mail_black from "../../images/icons/mail.svg"
import close_white from "../../images/icons/close-white.svg"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta.png"

import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"
import SoftFooterCta from "../../components/_global/softFooterCta"

import LibraryThumbnails from "../../components/resources/libraryThumbnails"

class ArticleTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.post = null
    this.json = null
    this.state = {
      metaPosition: "top",
    }
    // this._handleScroll = this._handleScroll.bind(this)
  }
  componentDidMount() {
    let { pageContext, data } = this.props
    let { postType } = pageContext
    let libraryPost = get(this.props, "data.contentfulLibrary")
    let glossaryPost = get(this.props, "data.contentfulGlossary")
    this.post = postType === "library" ? libraryPost : glossaryPost
    if (
      postType === "library" &&
      this.post.childContentfulLibraryArticleRichTextNode
    ) {
      this.json = this.post.childContentfulLibraryArticleRichTextNode.json
    } else if (
      postType === "glossary" &&
      this.post.childContentfulGlossaryArticleRichTextNode
    ) {
      this.json = this.post.childContentfulGlossaryArticleRichTextNode.json
    }

    if (this.json.content) {
      this.json.content.forEach(i => {
        if (i.nodeType === "embedded-asset-block") {
          this.setState({
            [i.data.target.sys.id]: false,
          })
        }
      })
    }

    // window.addEventListener("scroll", this._handleScroll)
  }
  componentWillUnmount() {
    // window.removeEventListener("scroll", this._handleScroll)
  }

  _handleScroll() {
    // let currentScrollPos = window.pageYOffset
    // let windowHeight = window.innerHeight
    // let heroHeight = this.hero.clientHeight
    // let articleHeight = this.article_body.clientHeight
    //
    // if (currentScrollPos < heroHeight) {
    //   this.setState({
    //     metaPosition: "top",
    //   })
    // } else if (
    //   currentScrollPos > heroHeight &&
    //   currentScrollPos < articleHeight
    // ) {
    //   this.setState({
    //     metaPosition: "fixed",
    //   })
    // } else if (currentScrollPos > articleHeight + windowHeight - 350) {
    //   this.setState({
    //     metaPosition: "bottom",
    //   })
    // }
  }
  render() {
    //// Handle Rich Text Rendering
    let { postType } = this.props.pageContext
    const libraryPost = get(this.props, "data.contentfulLibrary")
    const glossaryPost = get(this.props, "data.contentfulGlossary")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    let post = postType === "library" ? libraryPost : glossaryPost
    let json = ""

    if (
      postType === "library" &&
      post.childContentfulLibraryArticleRichTextNode
    ) {
      json = post.childContentfulLibraryArticleRichTextNode.json
    } else if (
      postType === "glossary" &&
      post.childContentfulGlossaryArticleRichTextNode
    ) {
      json = post.childContentfulGlossaryArticleRichTextNode.json
    }

    let youtube = post.youtube ? (
      <div className="video-container">
        <ReactPlayer url={post.youtube} controls />
      </div>
    ) : (
      ""
    )

    let anchor
    if (post.anchorPodcast) {
      let url =
        post.anchorPodcast.split("/episodes")[0] +
        "/embed/episodes" +
        post.anchorPodcast.split("/episodes")[1]
      console.log(url)
      anchor = (
        <div className="audio-container">
          <iframe
            src={url}
            width="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      )
    }

    let spotify = post.spotify ? (
      <div className="audio-container">
        <SpotifyPlayer
          uri={post.spotify}
          size={{
            width: "100%",
            height: 81,
          }}
          view="coverart"
          theme="black"
        />
      </div>
    ) : (
      ""
    )

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          if (node.data.target.fields) {
            let { description, title, file } = node.data.target.fields
            let { id } = node.data.target.sys
            const { url } = file["en-US"]
            return (
              <div className="w-100 d-flex flex-column align-items-center justify-content-center my-5">
                <img
                  src={url}
                  alt="article"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.setState({ [id]: true })}
                />
                {description ? (
                  <div className="eyebrow pt-4">{description["en-US"]}</div>
                ) : (
                  ""
                )}
                <div
                  className={
                    "lightbox-modal " + (this.state[id] === true ? "show" : "")
                  }
                  onClick={() => this.setState({ [id]: false })}
                >
                  <h3
                    className="close"
                    onClick={() => this.setState({ [id]: false })}
                  >
                    Close <img src={close_white} alt="" />
                  </h3>
                  <img src={url} className="modal-content " id="img01" />
                  {description ? (
                    <div id="caption" className="eyebrow pt-5 text-white">
                      {description["en-US"]}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )
          }
        },
        [INLINES.ENTRY_HYPERLINK]: node => {
          const link = node.data.target.fields.slug["en-US"]
          const title = node.data.target.fields.title["en-US"]
          return <Link to={"/resources/white-papers/" + link}>{title}</Link>
        },
      },
    }

    let article = documentToReactComponents(json, options)

    //// Handle Scroll Position
    let elStyle = {
      position: "fixed",
      top: "75px",
      left: "35px",
    }

    let colStyle =
      this.state.metaPosition === "top"
        ? {
            display: "flex",
            alignItems: "flex-start",
          }
        : {
            display: "flex",
            alignItems: "flex-end",
          }

    //// Create Share Link
    const shareItem = typeof window !== "undefined" ? window.location : ""

    //// Disclosure Text

    let disclosure = (
      <div className="disclosure">
        <p className="border-top border-black pt-4">
          Esoterica's statements are not an endorsement of any company or a
          recommendation to buy, sell or hold any security. For full
          disclosures, <Link to="/terms-of-service">click here</Link>.
        </p>
      </div>
    )

    //// Tag Listing

    let tags = (
      <div className="tag-container">
        {post.tags
          ? post.tags.map((i, idx) => {
              return (
                <div key={idx} className="tag body-small">
                  {i}
                </div>
              )
            })
          : ""}
      </div>
    )

    return (
      <Layout navTheme="dark" location={this.props.location}>
        <SEO title={post.title} description={post.description.description} />
        <div id="articleTemplate">
          <div className="header-container">
            <Img
              alt={post.title}
              fluid={post.heroImage.fluid}
              className="hero_img"
            />
            <div className="header-overlay" />
            <h1 className="section-headline article-title">{post.title}</h1>
          </div>
          <Container fluid>
            <Row className="article-row">
              <Col
                xs="12"
                md="2"
                style={this.state.metaPosition === "fixed" ? {} : colStyle}
              >
                <div
                  className="metadata-container"
                  style={this.state.metaPosition === "fixed" ? elStyle : {}}
                >
                  <div className="date body-small mb-4">{post.publishDate}</div>
                  <div className="author body-small mb-4">
                    <div className="eyebrow">Author</div>
                    {post.author ? post.author.name : ""}
                  </div>
                  <div className="social body-small mb-4">
                    <div className="eyebrow">Share</div>
                    <a
                      href={
                        "https://twitter.com/intent/tweet?text=" + shareItem
                      }
                      target="_blank"
                      rel="norefferer noopener"
                    >
                      <img
                        src={twitter_black}
                        alt="twitter"
                        className="twitter-icon"
                        width="15px"
                      />
                    </a>
                    <a
                      href={
                        "https://linkedin.com/shareArticle?url=" + shareItem
                      }
                      target="_blank"
                      rel="norefferer noopener"
                    >
                      <img
                        src={linkedin_black}
                        alt="linkedin"
                        className="linkedin-icon"
                        width="16px"
                      />
                    </a>

                    <a
                      href={
                        "mailto:?subject=Esoterica Capital&body=Check out this article: " +
                        shareItem
                      }
                    >
                      <img
                        src={mail_black}
                        alt="mail"
                        className="mail-icon"
                        width="19"
                      />
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs="12"
                md="8"
                className="d-flex flex-column align-items-center"
              >
                {youtube}
                {anchor}
                {spotify}
                <div className="article-container">
                  {article}
                  {tags}
                  {disclosure}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mb-4 related-container">
          <h1 className="mb-4 related-article-title">Related Articles.</h1>
          <LibraryThumbnails related={post} />
        </div>

        <EmailCapture color={"#fdfc71"} text={"#000"} />
        <ResourcesMarquee />
        <SoftFooterCta
          background={softFooterBg}
          text={"How we can work together"}
          ctaLead={"See"}
          cta={"Our Solutions"}
          link={"/our-solutions"}
        />
      </Layout>
    )
  }
}

export default connect(
  state => ({
    prevScrollPos: state.header.prevScrollPos,
  }),
  null
)(ArticleTemplate)

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulLibrary(slug: { eq: $slug }) {
      title
      youtube
      tags
      author {
        name
      }
      description {
        description
      }
      childContentfulLibraryArticleRichTextNode {
        json
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1440, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulGlossary(slug: { eq: $slug }) {
      title
      author {
        name
      }
      description {
        description
      }
      childContentfulGlossaryArticleRichTextNode {
        json
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1440, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
