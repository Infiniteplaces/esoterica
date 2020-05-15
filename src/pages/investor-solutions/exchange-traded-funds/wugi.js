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
    firebase
      .storage()
      .ref("/Esoterica_NXTG_ECONOMY_ETF_WUGI_HOLDINGS_20200514.csv")
      .getDownloadURL()
      .then(url => {
        console.log(url)
        fetch(url, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // no-cors, *cors, same-origin
          headers: {
            "Content-Type": "text/csv",
          },
        }).then(response => {
          console.log(response)
          console.log(response.headers.get("Content-Type"))
          console.log(response.headers.get("Date"))
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.type)
          console.log(response.url)
        })
      })
  }, [])

  console.log(data)
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
