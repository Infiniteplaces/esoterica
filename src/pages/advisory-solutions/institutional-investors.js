import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/advisorySolutions/previewPill"
import EmailPill from "../../components/advisorySolutions/emailPill"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/advisorySolutions/advisorySolutionsFooterCta_2.png"

import LibraryFeatured from "../../components/resources/libraryFeatured"

class InstitutionalInvestorsPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout>
        <SEO title="Institutional Investors" />
        <Container fluid id="advisorySolutions">
          <Row className="header-row">
            <Col>
              <h1>Institutional Investors</h1>
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
            title={"WUGI ETF"}
            tags={["technology", "retail"]}
            text={
              "Tum dicere exorsus est eligendi optio, cumque nihil molestiae non quo aut reiciendis."
            }
            bgColor={"#fdfc71"}
            textColor={"#000"}
            link={"/advisory-solutions/exchange-traded-funds"}
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

export default InstitutionalInvestorsPage

export const InstitutionalInvestorsQuery = graphql`
  query InstitutionalInvestorsQuery {
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
