import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/_global/layout"
import Image from "../components/_global/image"
import SEO from "../components/_global/seo"

import EmailCapture from "../components/_global/emailCapture"
import ResourcesMarquee from "../components/_global/resourcesMarquee"
import SoftFooterCta from "../components/_global/softFooterCta"
import softFooterBg from "../images/investorSolutions/investorSolutionsFooterCta.png"

const TermsPage = () => (
  <Layout>
    <SEO title="Terms of Service" />
    <Container fluid id="privacyPolicy">
      <Row className="d-flex justify-content-center">
        <Col md="11">
          <h2>Privacy Policy</h2>
          <p>This Privacy Notice was last updated May 08, 2020</p>
          <p>
            This Privacy Notice applies to personal data collected on our
            website
            <a href="https://esotericacap.com/"> esotericacap.com</a>{" "}
            (“Website”). This Privacy Notice sets out the categories of personal
            data we collect from you, how we collect it, what we use it for and
            with whom we share it in accordance with the General Data Protection
            Regulation (EU) 2016/679 (“GDPR”). For the purposes of this Privacy
            Notice, “ESOTERICA”, “we”, “us”, and “our” means Esoterica Capital
            LLC and Esoterica Thematic Trust.
          </p>
        </Col>
      </Row>
    </Container>
    <EmailCapture />
    <ResourcesMarquee />
    <SoftFooterCta
      background={softFooterBg}
      text={"How we can work together"}
      ctaLead={"See"}
      cta={"Advisory Solutions"}
      link={"/investorSolutions"}
    />
  </Layout>
)

export default TermsPage
