import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { setCookies } from "../../state/global"

const Cookies = ({ dispatch, cookies }) => {
  return (
    <div id="cookies">
      <h3>
        This site uses cookies to improve performance. View our{" "}
        <Link to="/privacy-policy" className="underline">
          Cookie Policy
        </Link>
      </h3>
      <div
        className="cookie-button"
        onClick={() => dispatch(setCookies(false))}
      >
        <div className="eyebrow">ACCEPT COOKIES</div>
      </div>
    </div>
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, cookies: state.global.cookies }),
  null
)(Cookies)
