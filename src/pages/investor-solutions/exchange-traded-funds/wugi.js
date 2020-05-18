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
    // firebase.initializeApp({
    //   apiKey: "AIzaSyDeAp-RVU8Rq5mzeANpV5169tYHJzmzXKY",
    //   authDomain: "esoterica-capital.netlify.app",
    //   projectId: "esotericawebsite",
    //   storageBucket: "esotericawebsite.appspot.com",
    //   messagingSenderId: "118569009688",
    // })
    // var storageRef = firebase
    //   .storage()
    //   .ref("esoterica_data_storage/BBH_ESO_ETF_PERF_WEB.20200511.CSV")
    // storageRef.getDownloadURL().then(function(url) {
    //   console.log(url)
    // })
    let daily = firebase
      .firestore()
      .collection("01-APR-20")
      .doc("BBH_Position")
      .collection("data")
      .doc("1")

    daily
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
