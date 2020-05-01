import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col, Modal } from "reactstrap"
import Img from "gatsby-image"

import expand from "../../images/icons/expand.svg"
import expand_hover from "../../images/icons/expand_hover.svg"

const ResearchTeam = ({}) => {
  let [teamModalOne, setTeamModalOne] = useState(false)
  let [teamModalTwo, setTeamModalTwo] = useState(false)
  let [teamModalThree, setTeamModalThree] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      catherine_wood: file(relativePath: { eq: "team/catherine_wood.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      don_rich: file(relativePath: { eq: "team/don_rich.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diana_wang: file(relativePath: { eq: "team/diana_wang.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  let TeamMemberOne = (
    <Col sm="12" md="4">
      <div className="team-member" onClick={() => setTeamModalOne(true)}>
        <div className="img-container">
          <Img
            className="team-img"
            fluid={data.catherine_wood.childImageSharp.fluid}
          />
        </div>
        <div className="eyebrow">Position Title</div>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Catherine D. Wood</h4>
          <img src={expand} alt="" width="25" className="expand-icon" />
        </div>
      </div>
      <Modal
        toggle={() => setTeamModalOne(false)}
        isOpen={teamModalOne}
        className="team-member-modal"
      >
        <Container fluid className="team-member-modal-container">
          <Row>
            <Col>
              <div className="modal-image-container">
                <Img
                  className="modal-team-img"
                  fluid={data.catherine_wood.childImageSharp.fluid}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="body-small">Chief Investment Officer</div>
                  <h3 className="pb-3">Catherine Wood</h3>
                  <p className="pb-3">
                    Don Rich is co-founder and CIO (Chief Investment Officer) of
                    Esoterica Capital. In addition, he serves as the Chief
                    Strategist, oversees the asset allocated funds and is
                    responsible for new product design. Dr. Rich also spearheads
                    the social media, thought-leadership/intellectual-branding
                    initiative by providing digital audio, video and text
                    discussions on the linkage between macroeconomics, capital
                    markets and investing. Don previously held senior leadership
                    roles at Harvard Management Company, Wellington Management
                    Company, State Street Bank, Dow Chemical Pension Fund, and
                    MFC Global Investment Management.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="info-container">
                    <div className="body-small">Education</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Awards</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Connect</div>
                    <p>Lorem Ipsum</p>
                  </div>
                </Col>
                <Col>
                  <div className="info-container">
                    <div className="body-small">Favorite Resources</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Best Investment Advice</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Dons Writing</div>
                    <p>Lorem Ipsum</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Col>
  )

  let TeamMemberTwo = (
    <Col sm="12" md="4">
      <div onClick={() => setTeamModalTwo(true)} className="team-member">
        <div className="img-container">
          <Img
            className="team-img"
            fluid={data.don_rich.childImageSharp.fluid}
          />
        </div>
        <div className="eyebrow">Position Title</div>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Don Rich, PhD</h4>
          <img src={expand} alt="" width="25" className="expand-icon" />
        </div>
      </div>
      <Modal
        toggle={() => setTeamModalTwo(false)}
        isOpen={teamModalTwo}
        className="team-member-modal"
      >
        <Container fluid className="team-member-modal-container">
          <Row>
            <Col>
              <div className="modal-image-container">
                <Img
                  className="modal-team-img"
                  fluid={data.don_rich.childImageSharp.fluid}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="body-small">Chief Investment Officer</div>
                  <h3 className="pb-3">Catherine Wood</h3>
                  <p className="pb-3">
                    Don Rich is co-founder and CIO (Chief Investment Officer) of
                    Esoterica Capital. In addition, he serves as the Chief
                    Strategist, oversees the asset allocated funds and is
                    responsible for new product design. Dr. Rich also spearheads
                    the social media, thought-leadership/intellectual-branding
                    initiative by providing digital audio, video and text
                    discussions on the linkage between macroeconomics, capital
                    markets and investing. Don previously held senior leadership
                    roles at Harvard Management Company, Wellington Management
                    Company, State Street Bank, Dow Chemical Pension Fund, and
                    MFC Global Investment Management.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="info-container">
                    <div className="body-small">Education</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Awards</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Connect</div>
                    <p>Lorem Ipsum</p>
                  </div>
                </Col>
                <Col>
                  <div className="info-container">
                    <div className="body-small">Favorite Resources</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Best Investment Advice</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Dons Writing</div>
                    <p>Lorem Ipsum</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Col>
  )

  let TeamMemberThree = (
    <Col sm="12" md="4">
      <div onClick={() => setTeamModalThree(true)} className="team-member">
        <div className="img-container">
          <Img
            className="team-img"
            fluid={data.diana_wang.childImageSharp.fluid}
          />
        </div>
        <div className="eyebrow">Position Title</div>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Diana Wang, MA</h4>
          <img src={expand} alt="" width="25" className="expand-icon" />
        </div>
      </div>
      <Modal
        toggle={() => setTeamModalThree(false)}
        isOpen={teamModalThree}
        className="team-member-modal"
      >
        <Container fluid className="team-member-modal-container">
          <Row>
            <Col>
              <div className="modal-image-container">
                <Img
                  className="modal-team-img"
                  fluid={data.diana_wang.childImageSharp.fluid}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="body-small">Chief Investment Officer</div>
                  <h3 className="pb-3">Catherine Wood</h3>
                  <p className="pb-3">
                    Don Rich is co-founder and CIO (Chief Investment Officer) of
                    Esoterica Capital. In addition, he serves as the Chief
                    Strategist, oversees the asset allocated funds and is
                    responsible for new product design. Dr. Rich also spearheads
                    the social media, thought-leadership/intellectual-branding
                    initiative by providing digital audio, video and text
                    discussions on the linkage between macroeconomics, capital
                    markets and investing. Don previously held senior leadership
                    roles at Harvard Management Company, Wellington Management
                    Company, State Street Bank, Dow Chemical Pension Fund, and
                    MFC Global Investment Management.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="info-container">
                    <div className="body-small">Education</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Awards</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Connect</div>
                    <p>Lorem Ipsum</p>
                  </div>
                </Col>
                <Col>
                  <div className="info-container">
                    <div className="body-small">Favorite Resources</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Best Investment Advice</div>
                    <p>Lorem Ipsum</p>
                  </div>
                  <div className="info-container">
                    <div className="body-small">Dons Writing</div>
                    <p>Lorem Ipsum</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Col>
  )
  return (
    <Container id="researchTeam" fluid>
      <Row className="d-flex py-3">
        <Col>
          <h1 className="section">Research Team</h1>
        </Col>
      </Row>
      <Row className="py-3">
        {TeamMemberOne}
        {TeamMemberTwo}
        {TeamMemberThree}
      </Row>
      <Row className="py-md-3">
        <Col className="d-flex justify-content-center">
          <Link className="button secondary full-width" to="/about">
            <span>Learn About Our Team</span>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(ResearchTeam)
