import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "reactstrap"

const PreviewPill = ({
  title,
  text,
  bgColor,
  textColor,
  link,
  tags = null,
}) => {
  return (
    <Row id="previewPill">
      <Col>
        <Link to={link}>
          <div
            id="pill"
            className="h-100 w-100"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <h2>{title}</h2>
            <div>{text}</div>
          </div>
        </Link>
      </Col>
    </Row>
  )
}

export default PreviewPill