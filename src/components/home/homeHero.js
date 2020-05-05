import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Draggable from "react-draggable"

import icon_1 from "../../images/icons/heroIcon_1.svg"
import icon_2 from "../../images/icons/heroIcon_2.svg"
import icon_3 from "../../images/icons/heroIcon_3.svg"
import icon_4 from "../../images/icons/heroIcon_4.svg"
import icon_5 from "../../images/icons/heroIcon_5.svg"
import icon_6 from "../../images/icons/heroIcon_6.svg"

const HomeHero = ({}) => {
  const arr = [icon_1, icon_2, icon_3, icon_4, icon_5, icon_6]
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  let [locations, setLocations] = useState([
    {
      top: randomInteger(15, 95),
      left: randomInteger(5, 95),
    },
    {
      top: randomInteger(15, 95),
      left: randomInteger(5, 95),
    },
    {
      top: randomInteger(15, 95),
      left: randomInteger(5, 95),
    },
    {
      top: randomInteger(15, 95),
      left: randomInteger(5, 95),
    },
    {
      top: randomInteger(15, 95),
      left: randomInteger(5, 95),
    },
    {
      top: randomInteger(15, 95),
      left: randomInteger(5, 95),
    },
  ])

  setTimeout(() => {
    setLocations([
      {
        top: randomInteger(15, 95),
        left: randomInteger(5, 95),
      },
      {
        top: randomInteger(15, 95),
        left: randomInteger(5, 95),
      },
      {
        top: randomInteger(15, 95),
        left: randomInteger(5, 95),
      },
      {
        top: randomInteger(15, 95),
        left: randomInteger(5, 95),
      },
      {
        top: randomInteger(15, 95),
        left: randomInteger(5, 95),
      },
      {
        top: randomInteger(15, 95),
        left: randomInteger(5, 95),
      },
    ])
  }, 750)

  let icons = arr.map((i, idx) => {
    let style = {
      top: locations[idx].top + "%",
      left: locations[idx].left + "%",
    }
    return (
      <Draggable key={idx}>
        <div className="drag-box" style={style}>
          <img src={i} alt="home icon" className="home-icon" />
        </div>
      </Draggable>
    )
  })
  return (
    <Container fluid id="homeHero">
      {icons}
      <Row className="h-100">
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="section">
            Next-generation <br /> investing
          </h1>
          <h3 className="py-4">
            Esoterica is redesigning investing for all. Based in future <br />
            technologies, backed by industry-leading experts.
          </h3>
          <Link className="button primary" to="/about">
            Learn More
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(HomeHero)
