import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../../styles/index.scss"

import { setMobile } from "../../state/global"

const Layout = ({ children, dispatch }) => {
  useEffect(() => {
    _onWindowResize()
    window.addEventListener("resize", _onWindowResize)
  })

  function _onWindowResize() {
    if (window.innerWidth < 768) {
      dispatch(setMobile(true))
    } else {
      dispatch(setMobile(false))
    }
  }

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Header path={path} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(state => ({}), null)(Layout)
