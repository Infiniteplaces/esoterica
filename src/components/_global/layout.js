import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import HeaderMobile from "./headerMobile"
import Footer from "./footer"
import Cookies from "./cookies"
import "../../styles/index.scss"

import { setMobile } from "../../state/global"
import { setNavHover, setNavColor } from "../../state/header"

const Layout = ({ children, dispatch, mobile, cookies, navTheme }) => {
  let [path, setPath] = useState("/")
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname)
    }
    _onWindowResize()
    window.addEventListener("resize", _onWindowResize)
  })

  function _onWindowResize() {
    if (window.innerWidth <= 1024) {
      dispatch(setMobile(true))
    } else {
      dispatch(setMobile(false))
    }
  }

  dispatch(setNavColor(navTheme === "dark" ? "black" : "white"))

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
      {mobile ? <HeaderMobile path={path} /> : <Header path={path} />}

      <main onMouseOver={() => dispatch(setNavHover(false))}>{children}</main>
      {cookies ? <Cookies /> : ""}

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(
  state => ({ mobile: state.global.mobile, cookies: state.global.cookies }),
  null
)(Layout)
