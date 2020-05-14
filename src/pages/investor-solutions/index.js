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
            <div className="hero-title">
              <h1 className="section">Investor Solutions</h1>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
          <Container fluid>
            <Row className="header-row">
              <Col>
                <div>
                  <p>
                    We offer a range of investor solutions, with an actively
                    managed ETF at the center of our line-up. For each of these
                    offerings, we operate as an extension of you, making
                    ourselves available to our clients and providing personal
                    service.
                  </p>
                </div>
              </Col>
            </Row>
            <PreviewPill
              title={"Exchange Traded Funds"}
              text={
                "We manage active, thematic ETFs that capture growth in the new digital economy enabled by the onset of 5G."
              }
              bgColor={"#FDFC71"}
              textColor={"#000"}
              link={"/investor-solutions/exchange-traded-funds"}
              img={etf_illus}
            />
            <PreviewPill
              title={"Advisor Services"}
              text={
                "We’re committed to supporting financial advisors and registered investment advisors through content and accessibility to our investment professionals."
              }
              bgColor={"#8BCDFC"}
              textColor={"#000"}
              link={"/investor-solutions/advisor-services"}
              img={as_illus}
            />
            <PreviewPill
              title={"Individual Investors"}
              text={
                "Quite simply, we help you build wealth. We help you invest intelligently with educational content and relevant, timely market takeaways."
              }
              bgColor={"#FC5C58"}
              textColor={"#000"}
              link={"/investor-solutions/individual-investors"}
              img={ind_illus}
            />
            <PreviewPill
              title={"Institutional Investors"}
              text={
                "We serve institutional investors through separate accounts as well as investment products like exchange traded funds and mutual funds."
              }
              bgColor={"#85C65A"}
              textColor={"#000"}
              link={"/investor-solutions/institutional-investors"}
              img={ins_illus}
            />
            <EmailPill />
          </Container>
          <LibraryFeatured
            posts={featured}
            backgroundColor={"#fdfc71"}
            textColor={"black"}
            borderColor={"black"}
          />
          <SoftFooterCta
            background={softFooterBg}
            text={"For timely, relevant financial content"}
            ctaLead={"Check out the"}
            cta={"Library"}
            link={"/resources/library"}
          />
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
