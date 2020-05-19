import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "reactstrap"

const PreviewPill = ({
  title,
  text,
  bgColor,
  textColor,
  link,
  cta,
  img = null,
  externalLink = false,
  tags = null,
}) => {
  return (
    <Row id="previewPill" className="px-0">
      <Col className="px-0">
        {externalLink ? (
          <a href={link}>
            <div
              id="pill"
              className="h-100 w-100"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              <div className="text-container">
                <h2 className="mb-3">{title}</h2>
                {text}
                <a href={link} className="button secondary">
                  {cta}
                </a>
              </div>
              {img ? (
                <div
                  className="img-container"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </a>
        ) : (
          <Link to={link}>
            <div
              id="pill"
              className="h-100 w-100"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              <div className="text-container">
                <h2 className="mb-3">{title}</h2>

                {text}
                <Link className="button secondary" to={link}>
                  {cta}
                </Link>
              </div>
              {img ? (
                <div
                  className="img-container"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </Link>
        )}
      </Col>
    </Row>
  )
}

export default PreviewPill
