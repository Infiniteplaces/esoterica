import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import { Container, Row, Col } from "reactstrap"

import ArtcilePreview from "../../components/resources/articlePreview"

import Layout from "../../components/_global/layout"
import SEO from "../../components/_global/seo"

class ResourcesPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const glossary = get(this, "props.data.allContentfulGlossary.edges")
    const library = get(this, "props.data.allContentfulLibrary.edges")

    return (
      <Layout>
        <SEO title="Resources" />
        <Container fluid style={{ paddingTop: 150 }}></Container>
      </Layout>
    )
  }
}

export default ResourcesPage
