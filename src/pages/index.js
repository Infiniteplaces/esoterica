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

import softFooterBg from "../images/homepage/homepage_getStarted.png"

class IndexPage extends React.Component {
  render() {
    let { mobile } = this.props
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout>
        <SEO title="Home" />
        <HomeHero />
        <HomeFeaturedBlog featured={featured} posts={library} />
        <HomeOurPhilosophy />
        <HomeOurFunds />
        {mobile ? "" : <EmailCapture />}
        <ResearchTeam />
        <HomePress />
        {mobile ? <EmailCapture /> : ""}
        <ResourcesMarquee />
        <SoftFooterCta
          background={softFooterBg}
          text={
            "There’s more to investing than just ones and zeros. Learn what we mean here."
          }
          ctaLead={"Or,"}
          cta={"get started"}
          link={"/advisorySolutions"}
        />
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
