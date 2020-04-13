import React, { useState } from "react"
import { connect } from "react-redux"
// import addToMailchimp from "gatsby-plugin-mailchimp"

const Email = ({ mobile }) => {
  let [msg, setMsg] = useState("Stay in touch, or ")
  let email_cta = mobile ? "GO" : "SUBMIT"
  function _submit(e) {
    e.preventDefault()
    let email = e.target[0].value
    // if (ValidateEmail(email)) {
    //   addToMailchimp(email).then(data => {
    //     if ((data.result = "success")) {
    //       setMsg("thanks for signing up! ")
    //     }
    //   })
    // }
  }
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    alert("You have entered an invalid email address!")
    return false
  }
  return (
    <div className="email-signup-container">
      <div className="email-header">
        {msg}{" "}
        <a
          className="contact-us mobile"
          href="mailto:info@reedartdepartment.com"
        >
          <span>Reach out</span>
        </a>
      </div>
      <div className="email-form">
        <form action="" onSubmit={e => _submit(e)}>
          <input
            className="email-input"
            type="text"
            htmlFor="email"
            id="email"
            name="email"
            placeholder="YOUREMAIL@WEBSITE.COM"
          />
          <input className="submit-button" type="submit" value={email_cta} />
        </form>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(Email)
