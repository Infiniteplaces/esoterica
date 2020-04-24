import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Slider from "react-slick"

import next_arrow from "../images/icons/arrow-right.svg"
import back_arrow from "../images/icons/arrow-left.svg"

class HomePress extends Component {
  super(props) {
    this.state = {}
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.slickSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
          },
        },
      ],
    }
  }

  next() {
    console.log("here")
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    let pressClippings = [
      {
        quote: "a great ETF, you can't believe how good of an ETF",
        cta_label: "Read the Article",
        cta_link: "https://www.bloomberg.com",
      },
      {
        quote: "another quote about how just fucking stellar this ETF is",
        cta_label: "Read the Article",
        cta_link: "https://www.bloomberg.com",
      },
      {
        quote: "some more good things that i can't think of right now",
        cta_label: "Read the Article",
        cta_link: "https://www.bloomberg.com",
      },
    ]

    let display = pressClippings.map((i, idx) => {
      return (
        <div key={idx} xs="12" className="press-clipping">
          <h1 className="section">“{i.quote}”</h1>
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
        <Row className="title-row">
          <Col className="d-flex justify-content-center align-items-center">
            <h3>Kind words from sources we trust</h3>
          </Col>
        </Row>
        <Row className="carousel-row">
          <Col
            xs="1"
            lg="2"
            className="d-flex justify-content-start align-items-center"
          >
            <img
              onClick={() => this.previous()}
              src={back_arrow}
              alt=""
              className="arrow back"
            />
          </Col>
          <Col xs="10" lg="8">
            <Slider ref={c => (this.slider = c)} {...this.slickSettings}>
              {display}
            </Slider>
          </Col>
          <Col
            xs="1"
            lg="2"
            className="d-flex justify-content-end align-items-center"
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
