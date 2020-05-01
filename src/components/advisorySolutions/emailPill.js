import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "reactstrap"

import Email from "../_global/email"

const EmailPill = ({}) => {
  return (
    <Row id="emailPill">
      <Col>
        <div id="pill">
          <div className="email-container">
            <h3>
              More funds coming soon — <br />
              Sign up to be the first to know.
            </h3>
            <Email header={false} />
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default EmailPill
