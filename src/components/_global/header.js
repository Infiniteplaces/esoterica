import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import logo_black from "../../../static/logos/esoterica-logo-black.svg"
import logo_white from "../../../static/logos/esoterica-logo-white.svg"

import linkedin from "../../../static/icons/linkedin.svg"
import youtube from "../../../static/icons/youtube.svg"
import twitter from "../../../static/icons/twitter.svg"
import mail from "../../../static/icons/mail.svg"

import {
  setHideNav,
  setPrevScrollPos,
  setNavTransparent,
  setNavColor,
  setNavHover,
  setNavHoverCat,
} from "../../state/header"

const LINKMAP = [
  {
    title: "Home",
    link: "/",
    dropdown: false,
  },
  {
    title: "Advisory Solutions",
    link: "/advisory-solutions",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Exchange Traded Funds",
        link: "/advisory-solutions/exchange-traded-funds",
      },
      {
        title: "Advisory Services",
        link: "/advisory-solutions/advisor-services",
      },
      {
        title: "Individual Investors",
        link: "/advisory-solutions/individual-investors",
      },
      {
        title: "Institutional Investors",
        link: "/advisory-solutions/institutional-investors",
      },
    ],
  },
  {
    title: "About Us",
    link: "/about",
    dropdown: false,
  },
  {
    title: "Resources",
    link: "/resources",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Library",
        link: "/resources/library",
      },
      {
        title: "Glossary",
        link: "/resources/glossary",
      },
    ],
  },
]

const Header = ({
  dispatch,
  path,
  hideNav,
  prevScrollPos,
  navTransparent,
  navColor,
  navHover,
  navHoverCat,
}) => {
  let hidden_selector_display = ""

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll)
  }, [prevScrollPos])

  function _handleScroll() {
    let currentScrollPos = window.pageYOffset
    let hidden = prevScrollPos < currentScrollPos
    dispatch(setNavTransparent(currentScrollPos < 5))
    dispatch(setPrevScrollPos(currentScrollPos))
    dispatch(setHideNav(hidden))
  }

  let navLinks = LINKMAP.map((i, idx) => {
    return (
      <Link
        key={idx}
        to={i.link}
        onMouseOver={() => {
          dispatch(setNavHover(i.dropdownLinks ? true : false))
          dispatch(setNavHoverCat(i.link))
        }}
      >
        <div className={"indicator " + (path === i.link ? "active" : "")} />
        <span>{i.title}</span>
      </Link>
    )
  })

  if (navHover) {
    LINKMAP.map((i, idx) => {
      if (i.link === navHoverCat) {
        hidden_selector_display = i.dropdownLinks.map((i, idx) => {
          return (
            <Link
              onMouseOver={() => {
                dispatch(setNavHover(true))
              }}
              key={idx}
              to={i.link}
            >
              <span
                onMouseOver={() => {
                  dispatch(setNavHover(true))
                }}
              >
                {i.title}
              </span>
            </Link>
          )
        })
      }
    })
  }

  function _renderNavHover(hover) {
    if (!hover) {
      dispatch(setNavHover(false))
    }
  }
  return (
    <header
      className={(navHover ? "expand " : "") + (hideNav ? " hidden " : "")}
    >
      <Container
        fluid
        className={
          "main-nav " +
          navColor +
          (navTransparent ? " transparent " : "") +
          (hideNav ? " hidden " : "") +
          (navHover ? " expand " : "")
        }
      >
        <Row className="h-100">
          <Col md={{ size: 2 }} className="logo-container">
            <Link to="/">
              <img
                src={navColor === "black" ? logo_white : logo_black}
                alt="nav-logo"
                className="nav-logo"
              />
            </Link>
          </Col>
          <Col md={{ size: 6, offset: 1 }} className="nav-links">
            {navLinks}
          </Col>
          <Col md={{ size: 2, offset: 1 }} className="nav-icons">
            <a href="" target="_blank" rel="norefferer noopener">
              <img
                src={twitter}
                alt="twitter"
                className="twitter-icon"
                width="16px"
              />
            </a>
            <a href="" target="_blank" rel="norefferer noopener">
              <img
                src={linkedin}
                alt="linkedin"
                className="linkedin-icon"
                width="17px"
              />
            </a>
            <a href="" target="_blank" rel="norefferer noopener">
              <img
                src={youtube}
                alt="youtube"
                className="youtube-icon"
                width="21px"
              />
            </a>
            <a href="malto:" target="_blank" rel="norefferer noopener">
              <img src={mail} alt="mail" className="mail-icon" width="19" />
            </a>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className={
          "nav-hover-container " +
          navColor +
          (navHover ? " reveal" : "") +
          (hideNav ? " hidden " : "")
        }
      >
        <Row className="h-100">
          <Col className="nav-links">{hidden_selector_display}</Col>
        </Row>
      </Container>
    </header>
  )
}

export default connect(
  state => ({
    hideNav: state.header.hideNav,
    prevScrollPos: state.header.prevScrollPos,
    navTransparent: state.header.navTransparent,
    navColor: state.header.navColor,
    navHover: state.header.navHover,
    navHoverCat: state.header.navHoverCat,
  }),
  null
)(Header)
