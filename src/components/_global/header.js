import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import logo_black from "../../images/logos/esoterica-logo-black.svg"
import logo_white from "../../images/logos/esoterica-logo-white.svg"

import linkedin_black from "../../images/icons/linkedin.svg"
import youtube_black from "../../images/icons/youtube.svg"
import twitter_black from "../../images/icons/twitter.svg"
import mail_black from "../../images/icons/mail.svg"

import linkedin_white from "../../images/icons/linkedin-white.svg"
import youtube_white from "../../images/icons/youtube-white.svg"
import twitter_white from "../../images/icons/twitter-white.svg"
import mail_white from "../../images/icons/mail-white.svg"

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
    title: "Investor Solutions",
    link: "/investor-solutions",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Exchange Traded Funds",
        link: "/investor-solutions/exchange-traded-funds",
      },
      {
        title: "Advisor Services",
        link: "/investor-solutions/advisor-services",
      },
      {
        title: "Individual Investors",
        link: "/investor-solutions/individual-investors",
      },
      {
        title: "Institutional Investors",
        link: "/investor-solutions/institutional-investors",
      },
    ],
  },
  {
    title: "Resources",
    link: "/resources/library",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Library",
        link: "/resources/library",
      },
      {
        title: "Educational Writing",
        link: "/resources/educational-writing",
      },
    ],
  },
  {
    title: "About Us",
    link: "/about",
    dropdown: false,
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
        onClick={() => dispatch(setNavHover(false))}
        onMouseOver={() => {
          dispatch(setNavHover(i.dropdownLinks ? true : false))
          dispatch(setNavHoverCat(i.link))
        }}
      >
        <div
          className={
            "indicator " +
            (i.link.split("/")[1] === path.split("/")[1] ? "active" : "")
          }
        />
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
              onClick={() => dispatch(setNavHover(false))}
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
            <a
              href="https://twitter.com/esotericacap?lang=en"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={navColor === "black" ? twitter_white : twitter_black}
                alt="twitter"
                className="twitter-icon"
                width="16px"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/esoterica-capital/about/"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={navColor === "black" ? linkedin_white : linkedin_black}
                alt="linkedin"
                className="linkedin-icon"
                width="17px"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={navColor === "black" ? youtube_white : youtube_black}
                alt="youtube"
                className="youtube-icon"
                width="21px"
              />
            </a>
            <a href="mailto:info@esotericacap.com">
              <img
                src={navColor === "black" ? mail_white : mail_black}
                alt="mail"
                className="mail-icon"
                width="19"
              />
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
