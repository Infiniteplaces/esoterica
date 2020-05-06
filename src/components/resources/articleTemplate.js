import React, { useEffect } from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../_global/layout"
import { Container, Row, Col } from "reactstrap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import linkedin_black from "../../images/icons/linkedin.svg"
import youtube_black from "../../images/icons/youtube.svg"
import twitter_black from "../../images/icons/twitter.svg"
import mail_black from "../../images/icons/mail.svg"

import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta.png"

class ArticleTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      metaPosition: "top",
    }
    this._handleScroll = this._handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll)
  }

  _handleScroll() {
    let currentScrollPos = window.pageYOffset
    let windowHeight = window.innerHeight
    let heroHeight = this.hero.clientHeight
    let articleHeight = this.article_body.clientHeight

    if (currentScrollPos < heroHeight) {
      this.setState({
        metaPosition: "top",
      })
    } else if (
      currentScrollPos > heroHeight &&
      currentScrollPos < articleHeight
    ) {
      this.setState({
        metaPosition: "fixed",
      })
    } else if (currentScrollPos > articleHeight + windowHeight - 350) {
      this.setState({
        metaPosition: "bottom",
      })
    }
  }
  render() {
    //// Handle Rich Text Rendering
    let { postType } = this.props.pageContext
    const libraryPost = get(this.props, "data.contentfulLibrary")
    const glossaryPost = get(this.props, "data.contentfulGlossary")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    let post = postType === "library" ? libraryPost : glossaryPost
    let json =
      postType === "library"
        ? post.childContentfulLibraryArticleRichTextNode.json
        : post.childContentfulGlossaryArticleRichTextNode.json

    let article = documentToReactComponents(json)

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

    return (
      <Layout navTheme="dark" location={this.props.location}>
        <div id="articleTemplate">
          <Helmet />
          <div
            className="header-container"
            ref={hero => {
              this.hero = hero
            }}
          >
            <Img alt={post.title} fluid={post.heroImage.fluid} />
            <h1 className="section-headline article-title">{post.title}</h1>
          </div>
          <Container fluid>
            <Row className="article-row">
              <Col
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
                    {post.author.name}
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
                    <a href="" target="_blank" rel="norefferer noopener">
                      <img
                        src={linkedin_black}
                        alt="linkedin"
                        className="linkedin-icon"
                        width="16px"
                      />
                    </a>
                    <a href="" target="_blank" rel="norefferer noopener">
                      <img
                        src={youtube_black}
                        alt="youtube"
                        className="youtube-icon"
                        width="20px"
                      />
                    </a>
                    <a href="malto:" target="_blank" rel="norefferer noopener">
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
              <Col md="8">
                <div
                  ref={article_body => {
                    this.article_body = article_body
                  }}
                  className="article-container"
                >
                  {article}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <EmailCapture />
        <ResourcesMarquee />
        <SoftFooterCta
          background={softFooterBg}
          text={"How we can work together"}
          ctaLead={"See"}
          cta={"Advisory Solutions"}
          link={"/investorSolutions"}
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
      author {
        name
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
