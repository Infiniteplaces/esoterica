import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import firebase from "gatsby-plugin-firebase"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../../components/_global/layout"
import SEO from "../../../components/_global/seo"

const WUGI = ({}) => {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    let daily = firebase
      .firestore()
      .collection("01-APR-20")
      .doc("BBH_Position")
      .collection("data")
      .doc("1")
      .get()
      .then(
        function(doc) {
          if (doc.exists) {
            console.log(doc.data())
            // this.props.setData(doc.data().doc)
          } else {
            console.log("Data not in Firebase")
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("Error getting document:", error)
      })
  }, [])

  return (
    <Layout>
      <SEO title="WUGI 5G" />
      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default connect(state => ({ mobile: state.global.mobile }), null)(WUGI)
