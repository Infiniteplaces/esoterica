import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Slider from "react-slick"

import next_arrow from "../../images/icons/arrow-right.svg"
import back_arrow from "../../images/icons/arrow-left.svg"

import etf_trends from "../../images/logos/etf_trends.png"
import etf_com from "../../images/logos/etf_com.png"
import bloomberg from "../../images/logos/bloomberg.png"

class HomePress extends Component {
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
          "WUGI takes high-conviction positions in companies … based on a combination of top-down and bottom-up research",
        cta_label: "Read the Article",
        cta_link:
          "https://www.etf.com/sections/daily-etf-watch/new-issuer-debuts-active-5g-etf?nopaging=1",
        icon: etf_com,
        iconWidth: "75",
      },
      {
        quote:
          "Esoterica Capital has launched the first active ETF that invests in the 5G ecosystem",
        cta_label: "Read the Article",
        cta_link:
          "https://www.etftrends.com/thematic-investing-channel/esoterica-capital-launches-first-active-etf-that-invests-in-5g-ecosystem/",
        icon: etf_trends,
        iconWidth: "150",
      },
      {
        quote:
          "Amid a global pandemic ... the issuer of an exchange-traded fund is going ahead with a plan",
        cta_label: "Read the Article",
        cta_link:
          "https://www.bloomberg.com/news/articles/2020-03-31/only-three-etfs-debuted-this-month-in-volatility-fueled-drought?sref=9I4LeZtA",
        icon: bloomberg,
        iconWidth: "150",
      },
    ]

    let display = pressClippings.map((i, idx) => {
      return (
        <div key={idx} xs="12" className="press-clipping">
          <img src={i.icon} alt="" width={i.iconWidth} />
          <h2 className="section">“{i.quote}”</h2>
          <h3>
            <a className="underline" href={i.cta_link}>
              {i.cta_label}
            </a>
          </h3>
        </div>
      )
    })
    return (
      <Container fluid id="homePress">
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

export default connect(state => ({}), null)(HomePress)
