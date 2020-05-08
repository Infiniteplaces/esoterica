import React, { useEffect } from "react"
import { connect } from "react-redux"
import { graphql, Link, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../_global/layout"
import { Container, Row, Col } from "reactstrap"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ReactPlayer from "react-player"

import linkedin_black from "../../images/icons/linkedin.svg"
import youtube_black from "../../images/icons/youtube.svg"
import twitter_black from "../../images/icons/twitter.svg"
import mail_black from "../../images/icons/mail.svg"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta.png"

import EmailCapture from "../../components/_global/emailCapture"
import ResourcesMarquee from "../../components/_global/resourcesMarquee"
import SoftFooterCta from "../../components/_global/softFooterCta"

import LibraryThumbnails from "../../components/resources/libraryThumbnails"

class ArticleTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      metaPosition: "top",
    }
    // this._handleScroll = this._handleScroll.bind(this)
  }
  componentDidMount() {
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
    let soundcloud = post.soundcloud ? (
      <div className="audio-container">
        <ReactPlayer url={post.soundcloud} />
      </div>
    ) : (
      ""
    )

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const { url } = node.data.target.fields.file["en-US"]
          return (
            <div className="w-100 d-flex justify-content-center my-5">
              <img src={url} alt="article" />
            </div>
          )
        },
        [INLINES.ENTRY_HYPERLINK]: node => {
          const link = node.data.target.fields.slug["en-US"]
          const title = node.data.target.fields.title["en-US"]
          return (
            <Link to={"/resources/educational-writing/" + link}>{title}</Link>
          )
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
        <p className="border-top border-black pt-4 ">
          This Newsletter is for informational purposes only and does not
          constitute, either explicitly or implicitly, any provision of services
          or products by Esoterica Capital LLC (“Esoterica”). Investors should
          determine for themselves whether a particular service or product is
          suitable for their investment needs or should seek such professional
          advice for their particular situation. All content is original and has
          been researched and produced by Esoterica unless otherwise stated
          therein. No part of the content may be reproduced in any form, or
          referred to in any other publication, without the express written
          permission of Esoterica. All statements made regarding companies,
          securities or other financial information contained in the content or
          articles relating to Esoterica are strictly beliefs and points of view
          held by Esoterica and are not endorsements of any company or security
          or recommendations to buy or sell any security. By visiting and/or
          otherwise using the Esoterica website in any way, you indicate that
          you understand and accept the terms of use as set forth on the website
          and agree to be bound by them. If you do not agree to the terms of use
          of the website, please do no access the website or any pages thereof.
          Any descriptions of, references to, or links to other products,
          publications or services does not constitute an endorsement,
          authorization, sponsorship by or affiliation with Esoterica with
          respect to any linked site or its sponsor, unless expressly stated by
          Esoterica. Any such information, products or sites have not
          necessarily been reviewed by Esoterica and are provided or maintained
          by third parties over whom Esoterica exercises no control. Esoterica
          expressly disclaims any responsibility for the content, the accuracy
          of the information, and/or quality of products or services provided by
          or advertised on these third-party sites.
        </p>
      </div>
    )

    return (
      <Layout navTheme="dark" location={this.props.location}>
        <div id="articleTemplate">
          <Helmet />
          <div className="header-container">
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
              <Col md="8" className="d-flex flex-column align-items-center">
                {youtube}
                {soundcloud}
                <div className="article-container">
                  {article}
                  {disclosure}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mb-4">
          <h1 className="mb-4 pl-4">Related Articles.</h1>
          <LibraryThumbnails tags={post} />
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
      youtube
      soundcloud
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
