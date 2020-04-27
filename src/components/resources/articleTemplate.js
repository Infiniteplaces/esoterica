import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../_global/layout"

class ArticleTemplate extends React.Component {
  render() {
    console.log(this.props)
    let { postType } = this.props.pageContext
    const libraryPost = get(this.props, "data.contentfulLibrary")
    const glossaryPost = get(this.props, "data.contentfulGlossary")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    let post = postType === "library" ? libraryPost : glossaryPost

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet />
          <div>
            <Img alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: "block",
              }}
            >
              {post.publishDate}
            </p>
          </div>
          <div>{post.body.body}</div>
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
      body {
        body
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulGlossary(slug: { eq: $slug }) {
      title
      body {
        body
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
