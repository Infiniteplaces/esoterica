import React from "react"
import { Link, graphql } from "gatsby"
import { connect } from "react-redux"
import get from "lodash/get"

import Layout from "../components/_global/layout"
import Image from "../components/_global/image"
import SEO from "../components/_global/seo"

import HomeHero from "../components/home/homeHero"
import HomeOurPhilosophy from "../components/home/homeOurPhilosophy"
import HomeOurFunds from "../components/home/homeOurFunds"
import EmailCapture from "../components/_global/emailCapture"
import ResearchTeam from "../components/_global/researchTeam"
import HomePress from "../components/home/homePress"
import HomeFeaturedBlog from "../components/home/homeFeaturedBlog"
import ResourcesMarquee from "../components/_global/resourcesMarquee"
import LibraryFourPost from "../components/resources/libraryFourPost"

import SoftFooterCta from "../components/_global/softFooterCta"
import softFooterBg from "../images/homepage/home_softFooter.png"

class IndexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    let { mobile } = this.props
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    const nonFeatured = library.filter(i => i.node.featured !== true)
    return (
      <Layout>
        <SEO title="Home" />
        <HomeHero />
        <HomeFeaturedBlog featured={featured} posts={nonFeatured} />
        <HomeOurPhilosophy />
        <HomeOurFunds />
        {mobile ? "" : <EmailCapture />}
        <HomePress />
        {mobile ? <EmailCapture /> : ""}
        <ResourcesMarquee />
      </Layout>
    )
  }
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(IndexPage)

export const featuredBlogQuery = graphql`
  query FeaturedBlogQuery {
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
              src
              ...GatsbyContentfulFluid
            }
            fixed(width: 250) {
              src
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
