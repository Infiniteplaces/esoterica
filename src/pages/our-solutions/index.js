import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/investorSolutions/previewPill"
import EmailPill from "../../components/investorSolutions/emailPill"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta_2.png"
import arrow from "../../images/icons/arrow-bent.svg"

import LibraryFeatured from "../../components/resources/libraryFeatured"

import etf_illus from "../../images/investorSolutions/etf_illus.png"
import as_illus from "../../images/investorSolutions/as_illus.png"
import ind_illus from "../../images/investorSolutions/ind_illus.png"
import ins_illus from "../../images/investorSolutions/ins_illus.png"

class InvestorSolutionsPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    const heroImage = get(this, "props.data.file.childImageSharp.fluid")

    return (
      <Layout navTheme="dark">
        <SEO title="Investor Solutions" />
        <div id="investorSolutions">
          <div className="hero">
            <Img className="hero-img" fluid={heroImage} />
            <div className="overlay" />
            <div className="hero-title">
              <div className="d-flex">
                <h1 className="section">Our Solutions</h1>
                <img src={arrow} alt="" className="arrow" />
              </div>
              <div className="my-5 w-75">
                <h2>
                  We’re here to help make the most of your financial future by
                  getting ahead of it.
                </h2>
              </div>
            </div>
          </div>
          <Container fluid className="px-0">
            <PreviewPill
              title={"Exchange Traded Funds"}
              text={
                "We manage active, thematic ETFs that capture growth in the new digital economy enabled by the onset of 5G."
              }
              bgColor={"#FAEEAC"}
              textColor={"#000"}
              externalLink
              link={"https://www.esotericacap.com"}
              img={etf_illus}
              cta="Learn More"
            />
            <PreviewPill
              title={"Advisor Services"}
              text={
                "We’re committed to supporting financial advisors and registered investment advisors through content and accessibility to our investment professionals."
              }
              bgColor={"#F9D879"}
              textColor={"#000"}
              link={"/our-solutions/advisor-services"}
              img={as_illus}
              cta="Learn More"
            />
            <PreviewPill
              title={"Individual Investors"}
              text={
                "Quite simply, we help you build wealth. We help you invest intelligently with educational content and relevant, timely market takeaways."
              }
              bgColor={"#F6C651"}
              textColor={"#000"}
              link={"/our-solutions/individual-investors"}
              img={ind_illus}
              cta="Learn More"
            />
            <PreviewPill
              title={"Institutional Investors"}
              text={
                "We serve institutional investors through separate accounts as well as investment products like exchange traded funds and mutual funds."
              }
              bgColor={"#FDFB86"}
              textColor={"#000"}
              link={"/our-solutions/institutional-investors"}
              img={ins_illus}
              cta="Learn More"
            />
            <EmailPill />
          </Container>
          <LibraryFeatured posts={featured} />
        </div>
      </Layout>
    )
  }
}

export default InvestorSolutionsPage

export const ArticleQuery = graphql`
  query ArticleQuery {
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
    file(relativePath: { eq: "investorSolutions/investorServices_hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
