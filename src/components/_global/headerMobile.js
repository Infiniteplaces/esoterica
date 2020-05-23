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

import hamburgerMenu from "../../images/icons/hamburger-menu.svg"
import close from "../../images/icons/close.svg"
import menuArrow from "../../images/icons/menu-arrow.svg"

import { setMobileNavOpen, setMobileNavCat } from "../../state/header"

const LINKMAP = [
  {
    title: "Home",
    link: "/",
    dropdown: false,
  },
  {
    title: "Our Solutions",
    link: "/our-solutions",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Exchange Traded Funds",
        link: "/our-solutions/exchange-traded-funds/wugi",
      },
      {
        title: "Advisor Services",
        link: "/our-solutions/advisor-services",
      },
      {
        title: "Individual Investors",
        link: "/our-solutions/individual-investors",
      },
      {
        title: "Institutional Investors",
        link: "/our-solutions/institutional-investors",
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
        title: "White Papers",
        link: "/resources/white-papers",
      },
    ],
  },
  {
    title: "About Us",
    link: "/about",
    dropdown: false,
  },
]

const HeaderMobile = ({ mobileNavOpen, mobileNavCat, dispatch }) => {
  let menuOptions
  if (!mobileNavCat) {
    menuOptions = LINKMAP.map((i, idx) => {
      if (!i.dropdown) {
        return (
          <Link
            key={idx}
            to={i.link}
            onClick={() => {
              dispatch(setMobileNavOpen(!mobileNavOpen))
              dispatch(setMobileNavCat(null))
            }}
          >
            <h1>{i.title}</h1>
          </Link>
        )
      } else {
        return (
          <div key={idx} onClick={() => dispatch(setMobileNavCat(i.title))}>
            <h1>
              <span>{i.title}</span>
              <img src={menuArrow} alt="" className="ml-3" width="6" />
            </h1>
          </div>
        )
      }
    })
  } else {
    menuOptions = LINKMAP.filter(i => i.title === mobileNavCat).map(
      (i, idx) => {
        return i.dropdownLinks.map((l, idx) => {
          return (
            <Link
              key={idx}
              to={l.link}
              onClick={() => {
                dispatch(setMobileNavOpen(!mobileNavOpen))
                dispatch(setMobileNavCat(null))
              }}
            >
              <h2>{l.title}</h2>
            </Link>
          )
        })
      }
    )
  }
  return (
    <section id="headerMobile">
      <div id="headerMobile_nav">
        <div className="logo-container">
          <Link to="/">
            <img src={logo_black} alt="" />
          </Link>
        </div>
        <div
          className="menu-container"
          onClick={() => {
            dispatch(setMobileNavOpen(!mobileNavOpen))
            dispatch(setMobileNavCat(null))
          }}
        >
          <span className="pt-1">Menu</span>
          <img src={mobileNavOpen ? close : hamburgerMenu} alt="" />
        </div>
      </div>
      <div id="headerMobile_menu" className={mobileNavOpen ? "" : "hidden"}>
        {menuOptions}
        {mobileNavCat ? (
          <div
            className="pt-4 pb-0 underline menu-footer"
            onClick={() => dispatch(setMobileNavCat(null))}
          >
            Back
          </div>
        ) : (
          <div className="mobile-social-icons pt-4 pb-0 mt-auto">
            <a
              href="https://twitter.com/esotericacap?lang=en"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={twitter_black}
                alt="twitter"
                className="twitter-icon"
                width="20px"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/esoterica-capital/about/"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={linkedin_black}
                alt="linkedin"
                className="linkedin-icon"
                width="21px"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={youtube_black}
                alt="youtube"
                className="youtube-icon"
                width="25px"
              />
            </a>
            <a
              href="malto:info@esotericacap.com"
              target="_blank"
              rel="norefferer noopener"
            >
              <img
                src={mail_black}
                alt="mail"
                className="mail-icon"
                width="24"
              />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default connect(
  state => ({
    mobileNavOpen: state.header.mobileNavOpen,
    mobileNavCat: state.header.mobileNavCat,
  }),
  null
)(HeaderMobile)
