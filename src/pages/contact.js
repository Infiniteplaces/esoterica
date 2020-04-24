import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/_global/layout"
import Image from "../components/_global/image"
import SEO from "../components/_global/seo"

import EmailCapture from "../components/emailCapture"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container fluid id="contactPage" className="spx">
      <Row className="title-row">
        <Col>
          <h1 className="section">Contact Us</h1>
        </Col>
      </Row>
      <Row className="contact-info-row">
        <Col
          md="4"
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <div className="eyebrow">FUND INQUIRIES</div>
          <div className="nav">
            Please contact us at
            <br />
            866-979-1710 for
            <br />
            questions regarding funds.
          </div>
          <div className="eyebrow">PRESS INQUIRIES</div>
          <div className="nav">
            <a href="mailto:press@esotericacap.com">press@esotericacap.com</a>
          </div>
        </Col>
        <Col
          md="4"
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <div className="eyebrow">GENERAL INQUIRIES</div>
          <div className="nav">
            Please contact us at
            <br />
            866-979-1710 for
            <br />
            questions regarding funds.
          </div>
          <div className="eyebrow">CAREER INQUIRIES</div>
          <div className="nav">
            <a href="mailto:press@esotericacap.com">press@esotericacap.com</a>
          </div>
        </Col>
        <Col
          md="4"
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <div className="eyebrow">ADDRESS</div>
          <div className="nav">
            Please contact us at
            <br />
            866-979-1710 for
            <br />
            questions regarding funds.
          </div>
          <div className="eyebrow">SOCIAL</div>
          <div className="nav">
            <a href="mailto:press@esotericacap.com">press@esotericacap.com</a>
          </div>
        </Col>
      </Row>
    </Container>
    <EmailCapture />
  </Layout>
)

export default ContactPage
