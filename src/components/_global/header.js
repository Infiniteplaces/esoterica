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
        title: "Resources",
        link: "/resources/resources",
      },
    ],
  },
]

const Header = ({ path }) => {
  let [hideNav, setHideNav] = useState(false)
  let [prevScrollPos, setPrevScrollPos] = useState(0)
  let [navTransparent, setNavTransparent] = useState(true)
  let [navColor, setNavColor] = useState("white")
  let [navHover, setNavHover] = useState(false)
  let [navHoverCat, setNavHoverCat] = useState(null)
  let hidden_selector_display = ""

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll)
  }, [prevScrollPos])

  function _handleScroll() {
    let currentScrollPos = window.pageYOffset
    let hidden = prevScrollPos < currentScrollPos
    setNavTransparent(currentScrollPos < 5)
    setPrevScrollPos(currentScrollPos)
    setHideNav(hidden)
  }

  let navLinks = LINKMAP.map((i, idx) => {
    return (
      <Link
        key={idx}
        to={i.link}
        onMouseOver={() => {
          setNavHover(i.dropdownLinks ? true : false)
          setNavHoverCat(i.link)
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
                setNavHover(true)
              }}
              key={idx}
              to={i.link}
            >
              <span
                onMouseOver={() => {
                  setNavHover(true)
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
    console.log(hover)
    if (!hover) {
      setNavHover(false)
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
            <img
              src={navColor === "black" ? logo_white : logo_black}
              alt="nav-logo"
              className="nav-logo"
            />
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
        onMouseOut={() => _renderNavHover(false)}
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

export default connect(state => ({}), null)(Header)
