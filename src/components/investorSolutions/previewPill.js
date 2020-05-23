import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

const PreviewPill = ({
  mobile,
  title,
  text,
  bgColor,
  textColor,
  link,
  mobileImgWidth,
  cta,
  img = null,
  tags = null,
}) => {
  return (
    <Row id="previewPill" className="px-0">
      <Col className="px-0">
        <Link to={link}>
          <div
            id="pill"
            className="h-100 w-100"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <div className="text-container">
              <h2 className="mb-3">{title}</h2>
              <div className="my-3 my-md-0">{text}</div>
              {mobile ? <img src={img} width={mobileImgWidth} alt="" /> : ""}
              <Link className="button secondary" to={link}>
                {cta}
              </Link>
            </div>
            {mobile ? (
              ""
            ) : (
              <div
                className="img-container"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            )}
          </div>
        </Link>
      </Col>
    </Row>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(PreviewPill)
