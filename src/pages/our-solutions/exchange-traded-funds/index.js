import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../../components/_global/layout"
import SEO from "../../../components/_global/seo"

import PreviewPill from "../../../components/investorSolutions/previewPill"
import EmailPill from "../../../components/investorSolutions/emailPill"

import LibraryFeatured from "../../../components/resources/libraryFeatured"

class ExchangeTradedFundsPage extends React.Component {
  render() {
    const library = get(this, "props.data.allContentfulLibrary.edges")
    const featured = library.filter(i => i.node.featured === true)
    return (
      <Layout>
        <SEO title="Exchange Traded Funds" />
        <Container fluid id="exchangeTradeFunds">
          <Row className="header-row">
            <Col>
              <h1>Funds</h1>
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
                <h3>Contact Us</h3>
                <p>
                  <strong>Contact us at: 866-979-1710</strong>
                </p>
                <p>
                  <strong>
                    Email us at:{" "}
                    <a
                      className="underline"
                      href="mailto:bruce.liu@esotericacap.com"
                    >
                      bruce.liu@esotericacap.com
                    </a>
                  </strong>
                </p>
              </div>
            </Col>
          </Row>
          <PreviewPill
            title={"WUGI ETF"}
            text={
              "WUGI is an actively-managed ETF that will invest in US and non-US equity securities of companies that are meaningfully participating in a digital economy enabled by fifth generation digital cellular network (“5G”) technology."
            }
            bgColor={"#fdfc71"}
            textColor={"#000"}
            link={"/our-solutions/exchange-traded-funds/wugi"}
          />

          <EmailPill />
        </Container>
        <LibraryFeatured
          posts={featured}
          backgroundColor={"#fdfc71"}
          textColor={"black"}
          borderColor={"black"}
        />
      </Layout>
    )
  }
}

export default ExchangeTradedFundsPage

export const ETFQuery = graphql`
  query ETFQuery {
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
