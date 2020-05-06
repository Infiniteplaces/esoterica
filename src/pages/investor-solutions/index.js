import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/investorSolutions/previewPill"
import EmailPill from "../../components/investorSolutions/emailPill"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta_2.png"

import LibraryFeatured from "../../components/resources/libraryFeatured"

class InvestorSolutionsPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout>
        <SEO title="Investor Solutions" />
        <Container fluid id="investorSolutions">
          <Row className="header-row">
            <Col>
              <h1>Investor Solutions</h1>
              <div>
                <p>
                  Esoterica is the manager of active, thematic ETFs that capture
                  growth in the new digital economy, enabled by the onset of 5G.
                </p>
                <p>
                  The first ETF launched on the Esoterica trust is WUGI, listed
                  on Cboe, which invests in companies that are foundational to
                  5G and which are capturing the greatest value.
                </p>

                <p>
                  With 10-100X greater speed, latency and capacity (depending on
                  the radio frequency of the infrastructure in place), 5G has
                  been likened to electricity in the era of steam: it will be
                  transformational, with big winners and losers. Our team of
                  investment professionals (based in the US and China) have
                  selected high conviction companies in the US and
                  internationally (principally in Asia: China, Taiwan, Korea,
                  Japan), that are capturing the most value in the 5G ecosystem.
                </p>
                <p>
                  These are companies that are reconfiguring computing
                  architecture to bring the cloud closer to the edge so as to
                  optimize the power of 5G, and those that are creating new SaaS
                  to extract and manipulate the data (think AI applications), as
                  well as those that are creating new semi-conductors to power
                  data centers and smartphones. Subsequent waves of value
                  capture will include a host of enabled applications (think
                  gaming), smart cities/factories, telemedicine etc.
                </p>
              </div>
            </Col>
          </Row>
          <PreviewPill
            title={"Exchange Traded Funds"}
            text={
              "Esoterica is the manager of active, thematic ETFs that capture growth in the new digital economy, enabled by the onset of 5G."
            }
            bgColor={"#F1F1F1"}
            textColor={"#000"}
            link={"/advisory-solutions/exchage-traded-funds"}
          />
          <PreviewPill
            title={"Advisor Services"}
            text={
              "We are committed to supporting financial advisors and registered investment advisors through content and accessibility to our investment professionals. "
            }
            bgColor={"#CCCCCC"}
            textColor={"#000"}
            link={"/advisory-solutions/advisor-services"}
          />
          <PreviewPill
            title={"Individual Investors"}
            text={
              "We are an extension of you.  We share the same beliefs and principles that you hold dear and cherish.  We want to help build wealth."
            }
            bgColor={"#8C8C8C"}
            textColor={"#fff"}
            link={"/advisory-solutions/individual-investors"}
          />
          <PreviewPill
            title={"Institutional Investors"}
            text={
              "We serve institutional investors through separate accounts as well as investment products (exchange traded funds, mutual funds). "
            }
            bgColor={"#414141"}
            textColor={"#fff"}
            link={"/advisory-solutions/institutional-investors"}
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
          text={"Steady stream of the best financial content"}
          ctaLead={"Check out the"}
          cta={"Library"}
          link={"/resources/library"}
        />
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
    file(relativePath: { eq: "resources/library-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
