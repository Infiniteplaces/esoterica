import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import { Container, Row, Col } from "reactstrap"

import ArtcilePreview from "../../components/resources/articlePreview"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

class LibraryPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const library = get(this, "props.data.allContentfulLibrary.edges")

    console.log(library)

    return (
      <Layout location={this.props.location}>
        <SEO title="Library" />
        <Helmet title={siteTitle} />
        <Container fluid style={{ paddingTop: 150 }}>
          <Row>
            <Col>
              <div className="wrapper">
                <h1 className="section-headline">Library</h1>
                <ul>
                  {library.map(({ node }) => {
                    return (
                      <li key={node.slug}>
                        <ArtcilePreview path={"library"} article={node} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default LibraryPage

export const libraryQuery = graphql`
  query LibraryIndexQuery {
    allContentfulLibrary(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
