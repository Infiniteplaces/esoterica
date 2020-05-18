import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/_global/layout"
import SEO from "../components/_global/seo"

import linkedin_black from "../images/icons/linkedin.svg"
import youtube_black from "../images/icons/youtube.svg"
import twitter_black from "../images/icons/twitter.svg"
import mail_black from "../images/icons/mail.svg"

import EmailCapture from "../components/_global/emailCapture"

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
            <a href="mailto:hi@esotericacap.com">hi@esotericacap.com</a>
          </div>
          <div className="eyebrow">CAREER INQUIRIES</div>
          <div className="nav">
            <a href="mailto:careers@esotericacap.com">
              careers@esotericacap.com
            </a>
          </div>
        </Col>
        <Col
          md="4"
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <div className="eyebrow">ADDRESS</div>
          <div className="nav">
            158 Ludlow Street,
            <br />
            New York, NY 10002
          </div>
          <div className="eyebrow">SOCIAL</div>
          <div className="nav">
            <a
              href="https://twitter.com/esotericacap?lang=en"
              target="_blank"
              rel="norefferer noopener"
              className="mr-4"
            >
              <img
                src={twitter_black}
                alt="twitter"
                className="twitter-icon"
                width="16px"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/esoterica-capital/about/"
              target="_blank"
              rel="norefferer noopener"
              className="mr-4"
            >
              <img
                src={linkedin_black}
                alt="linkedin"
                className="linkedin-icon"
                width="17px"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw"
              target="_blank"
              rel="norefferer noopener"
              className="mr-4"
            >
              <img
                src={youtube_black}
                alt="youtube"
                className="youtube-icon"
                width="21px"
              />
            </a>
            <a href="mailto:info@esotericacap.com" className="mr-4">
              <img
                src={mail_black}
                alt="mail"
                className="mail-icon"
                width="19"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <EmailCapture />
  </Layout>
)

export default ContactPage
