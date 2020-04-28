import React from "react"
import { Link, graphql } from "gatsby"
import { connect } from "react-redux"
import get from "lodash/get"

import Layout from "../components/_global/layout"
import Image from "../components/_global/image"
import SEO from "../components/_global/seo"

import HomeHero from "../components/homeHero"
import HomeOurPhilosophy from "../components/homeOurPhilosophy"
import HomeOurFunds from "../components/homeOurFunds"
import EmailCapture from "../components/emailCapture"
import ResearchTeam from "../components/researchTeam"
import HomePress from "../components/homePress"
import HomeResources from "../components/homeResources"
import HomeGetStarted from "../components/homeGetStarted"
import LibraryFeatured from "../components/resources/libraryFeatured"

class IndexPage extends React.Component {
  render() {
    let { mobile } = this.props
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout>
        <SEO title="Home" />
        <HomeHero />
        <LibraryFeatured posts={featured} />
        <HomeOurPhilosophy />
        <HomeOurFunds />
        {mobile ? "" : <EmailCapture />}
        <ResearchTeam />
        <HomePress />
        {mobile ? <EmailCapture /> : ""}
        <HomeResources />
        <HomeGetStarted />
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
