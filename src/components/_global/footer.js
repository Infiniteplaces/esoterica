import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Email from "./email"

import logo_white from "../../images/logos/esoterica-logo-white.svg"

const Footer = ({}) => {
  return (
    <footer>
      <Container fluid className="footer-container">
        <Row className="h-50 link-row">
          <Col className="d-flex flex-column">
            <span>
              <Link to="/contact">Contact</Link>
            </span>

            <span>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </span>
            <span>
              <Link to="/terms-of-service">Terms and Conditions</Link>
            </span>
          </Col>
          <Col className="d-flex flex-column">
            <span>
              <Link to="/resources/library">Library</Link>
            </span>
            <span>
              <Link to="/resources/white-papers">White Papers</Link>
            </span>
            <span>
              <a href="https://alright.studio">Site Credit</a>
            </span>
          </Col>
          <Col className="d-flex flex-column">
            <span>
              <a href="https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw">
                Youtube
              </a>
            </span>
            <span>
              <a href="https://twitter.com/esotericacap?lang=en">Twitter</a>
            </span>
            <span>
              <a href="https://www.linkedin.com/company/esoterica-capital/about/">
                Linkedin
              </a>
            </span>
          </Col>
          <Col className="d-flex flex-column text-faded">
            <p>© 2020 Esoterica</p>
            <p>Capital LLC</p>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
        <Row className="h-50 d-flex flex-column flex-md-row">
          <Col className="d-flex align-items-end justify-content-center justify-content-md-start order-2 order-md-1">
            <Link to="/">
              <img src={logo_white} alt="footer logo" className="footer-logo" />
            </Link>
          </Col>
          <Col className="d-flex justify-content-end align-items-end order-1 order-md-2">
            <Email header={true} />
          </Col>
        </Row>
      </Container>
      <div className="announcement-bar">
        <h3>Next</h3>
        <h3>Generation</h3>
        <h3>Investing</h3>
      </div>
      <div className="disclaimer">
        <p>
          ©2020, Esoterica Capital LLC (“ESOTERICA”). All content is original
          and has been researched and produced by ESOTERICA unless otherwise
          stated. No part of ESOTERICA’s original content may be reproduced in
          any form, or referred to in any other publication, without the express
          written permission of ESOTERICA. The content is for informational and
          educational purposes only and should not be construed as investment
          advice or an offer or solicitation in respect to any products or
          services for any persons who are prohibited from receiving such
          information under the laws applicable to their place of citizenship,
          domicile or residence.  
        </p>
        <p>
          Certain of the statements contained on this website may be statements
          of future expectations and other forward-looking statements that are
          based on ESOTERICA's current views and assumptions, and involve known
          and unknown risks and uncertainties that could cause actual results,
          performance or events to differ materially from those expressed or
          implied in such statements. All content is subject to change without
          notice. All statements made regarding companies or securities or other
          financial information on this site or any sites relating to ESOTERICA
          are strictly beliefs and points of view held by ESOTERICA or the third
          party making such statement and are not endorsements by ESOTERICA of
          any company or security or recommendations by ESOTERICA to buy, sell
          or hold any security. The content presented does not constitute
          investment advice, should not be used as the basis for any investment
          decision, and does not purport to provide any legal, tax or accounting
          advice. Please remember that there are inherent risks involved with
          investing in the markets, and your investments may be worth more or
          less than your initial investment upon redemption. There is no
          guarantee that ESOTERICA's objectives will be achieved. Further, there
          is no assurance that any strategies, methods, sectors, or any
          investment programs herein were or will prove to be profitable, or
          that any investment recommendations or decisions we make in the future
          will be profitable for any investor or client. Professional money
          management is not suitable for all investors. For full disclosures,
          please go to our{" "}
          <Link to="/terms-of-service">Terms & Conditions</Link>
           page.
        </p>
      </div>
    </footer>
  )
}

export default connect(state => ({}), null)(Footer)
