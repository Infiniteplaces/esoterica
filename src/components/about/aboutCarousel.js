import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Slider from "react-slick"

import next_arrow from "../../images/icons/arrow_right_white.svg"
import back_arrow from "../../images/icons/arrow_left_white.svg"

import etf_trends from "../../images/logos/etf_trends.png"
import etf_com from "../../images/logos/etf_com.png"
import bloomberg from "../../images/logos/bloomberg.png"

class AboutCarousel extends Component {
  super(props) {
    this.state = {}
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.slickSettings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 1,
          },
        },
      ],
    }
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    let pressClippings = [
      {
        quote:
          "BBH is excited and humbled to be a partner for Esoterica Capital and we are confident in their ability to build an innovative and distinctive ETF business",
        attribution:
          "Ryan Sullivan, Senior Vice President, Brown Brothers Harriman & Co.",
      },
      {
        quote:
          "Vident Investment Advisory … enjoys a close working relationship with Esoterica … VIA brings their expertise in ETF sub-advisory and combines that with Esoterica’s expertise in 5G related securities to offer a highly efficient ETF.",
        attribution: "Denise Krisko, President, Vident Investment Advisory",
      },
    ]

    let display = pressClippings.map((i, idx) => {
      return (
        <div key={idx} xs="12" className="press-clipping">
          <h2 className="section">“{i.quote}”</h2>
          <div className="cta">{i.attribution}</div>
        </div>
      )
    })
    return (
      <Container fluid id="aboutCarousel">
        <Row className="d-flex justify-content-center align-items-center pt-4 pt-md-5">
          <Col className="d-flex justify-content-center align-items-center pt-4 pt-md-5">
            <h3>Words from our partners</h3>
          </Col>
        </Row>
        <Row className="carousel-row">
          <Col
            xs="1"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              onClick={() => this.previous()}
              src={back_arrow}
              alt=""
              className="arrow back"
            />
          </Col>
          <Col xs="12" md="10" className="d-flex align-items-between">
            <Slider ref={c => (this.slider = c)} {...this.slickSettings}>
              {display}
            </Slider>
          </Col>
          <Col
            xs="1"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              onClick={() => this.next()}
              src={next_arrow}
              alt=""
              className="arrow next"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(state => ({}), null)(AboutCarousel)
