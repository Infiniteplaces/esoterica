import React from "react"
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

class ArticleTemplate extends React.Component {
  render() {
    let { postType } = this.props.pageContext
    const libraryPost = get(this.props, "data.contentfulLibrary")
    const glossaryPost = get(this.props, "data.contentfulGlossary")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    let post = postType === "library" ? libraryPost : glossaryPost

    console.log(post.childContentfulLibraryArticleRichTextNode.json)

    let article = documentToReactComponents(
      post.childContentfulLibraryArticleRichTextNode.json
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
              <Col md="2">
                <div className="metadata-container">
                  <div className="date body-small mb-4">{post.publishDate}</div>
                  <div className="author body-small mb-4">
                    <div className="eyebrow">Author</div>
                    {post.author.name}
                  </div>
                  <div className="photographer body-small mb-4">
                    <div className="eyebrow">Photographer</div>
                    <p>placeholder photog</p>
                  </div>
                  <div className="social body-small mb-4">
                    <div className="eyebrow">Share</div>
                    <a href="" target="_blank" rel="norefferer noopener">
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
                <div className="article-container">{article}</div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default ArticleTemplate

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
