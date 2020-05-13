import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "reactstrap"

const PreviewPill = ({
  title,
  text,
  bgColor,
  textColor,
  link,
  img = null,
  externalLink = false,
  tags = null,
}) => {
  return (
    <Row id="previewPill">
      <Col>
        {externalLink ? (
          <a href={link}>
            <div
              id="pill"
              className="h-100 w-100"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              <div className="text-container">
                <h2>{title}</h2>

                <div className="tag-container">
                  {tags
                    ? tags.map((i, idx) => {
                        return (
                          <div key={idx} className="tag body-small">
                            {i}
                          </div>
                        )
                      })
                    : ""}
                </div>
                {text}
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
                <h2>{title}</h2>
                <div className="tag-container">
                  {tags
                    ? tags.map((i, idx) => {
                        return (
                          <div key={idx} className="tag body-small">
                            {i}
                          </div>
                        )
                      })
                    : ""}
                </div>
                {text}
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
