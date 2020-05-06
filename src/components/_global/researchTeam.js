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
      bruce_liu: file(relativePath: { eq: "team/bruce_liu.png" }) {
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
      karan_trehan: file(relativePath: { eq: "team/karan_trehan.png" }) {
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
            fluid={data.bruce_liu.childImageSharp.fluid}
          />
        </div>
        <div className="eyebrow">Chief Executive Officer & Co-Founder</div>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Qindong (Bruce) Liu Ph.D., CFA</h4>
          <img src={expand} alt="" width="25" className="expand-icon" />
        </div>
      </div>
      <Modal
        toggle={() => setTeamModalOne(false)}
        isOpen={teamModalOne}
        className="team-member-modal"
      >
        <Container fluid className="team-member-modal-container">
          <Row className="d-flex align-items-center">
            <Col>
              <div className="modal-image-container">
                <Img
                  className="modal-team-img"
                  fluid={data.bruce_liu.childImageSharp.fluid}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="body-small">
                    Chief Executive Officer & Co-Founder
                  </div>
                  <h3 className="pb-3">Qindong (Bruce) Liu Ph.D., CFA</h3>
                  <p className="pb-3">
                    Bruce manages WUGI, Esoterica's active ETF investing in
                    5G-enabled digital economy. Prior to Esoterica, he was a
                    portfolio manager and partner of PhaseCapital. He was an
                    equity strategist at WisdomTree Asset Management and a
                    sell-side equity strategist at Sanford Bernstein. Bruce
                    started his investment career at Dow Chemical Pension Fund.
                    He received his Ph.D. in Business Administration from
                    University of Connecticut and holds the Chartered Financial
                    Analyst (CFA) designation.
                  </p>
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
            fluid={data.karan_trehan.childImageSharp.fluid}
          />
        </div>
        <div className="eyebrow">Executive Chairman & Co-Founder</div>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Karan Trehan</h4>
          <img src={expand} alt="" width="25" className="expand-icon" />
        </div>
      </div>
      <Modal
        toggle={() => setTeamModalTwo(false)}
        isOpen={teamModalTwo}
        className="team-member-modal"
      >
        <Container fluid className="team-member-modal-container">
          <Row className="d-flex align-items-center">
            <Col>
              <div className="modal-image-container">
                <Img
                  className="modal-team-img"
                  fluid={data.karan_trehan.childImageSharp.fluid}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="body-small">
                    Executive Chairman & Co-Founder
                  </div>
                  <h3 className="pb-3">Karan Trehan</h3>
                  <p className="pb-3">
                    Karan has been in international finance for four decades,
                    principally based in New York City. After careers at The
                    World Bank and Goldman Sachs (where was an early member of
                    the international fixed income group) and AllianceBernstein
                    (where as President & CEO, International he launched
                    Alliance's early thrust into offshore funds and strategic
                    alliances), he established a boutique investment management
                    company, Ankar Capital, to invest private equity in Asia and
                    in Asia-centric hedge funds. He was also the Founder and
                    Managing Partner of Emerging Managers Group, an offshore
                    fund platform, later sold to a US mutual fund complex. Karan
                    studied Economics at Delhi University, India followed by an
                    MBA from IMD, Switzerland. He has served on the boards of
                    several US-based and international mutual funds and has been
                    a trustee of the United World Colleges.
                  </p>
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
            fluid={data.don_rich.childImageSharp.fluid}
          />
        </div>
        <div className="eyebrow">Chief Investment Officer & Co-Founder</div>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Don Rich Ph.D.</h4>
          <img src={expand} alt="" width="25" className="expand-icon" />
        </div>
      </div>
      <Modal
        toggle={() => setTeamModalThree(false)}
        isOpen={teamModalThree}
        className="team-member-modal"
      >
        <Container fluid className="team-member-modal-container">
          <Row className="d-flex align-items-center">
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
                  <div className="body-small">
                    Chief Investment Officer & Co-Founder
                  </div>
                  <h3 className="pb-3">Don Rich Ph.D.</h3>
                  <p className="pb-3">
                    Don is CIO and portfolio manager of Esoterica's asset
                    allocation strategies. He is also spearheads new product
                    design and intellectual-branding. Don brings wide-ranging
                    experiences in asset management: Endowments: at Harvard
                    Management Company, he was a portfolio manager and member of
                    the endowment's prestigious asset allocation committee and
                    Director of Research. Pension Plans: portfolio manager and
                    Director of Risk Management for Dow Chemical Company.
                    Buy-Side: portfolio manager and Director of Research at
                    Wellington Management Company and MFC Global Investment
                    Management (Manulife), where he was Head of Tactical Asset
                    Allocation. Sell-Side & Consulting: designed customized
                    products and solutions for State Street and for Rich
                    Consulting. Don graduated from the University of Illinois
                    with B.S. and M.S. degrees and holds a Ph.D. in Quantitative
                    Finance from Virginia Tech. During his academic career, he
                    received early tenure, published over twenty scientific
                    journal articles, received multiple prestigious research
                    awards, and served as Associate Editor for academic
                    journals.
                  </p>
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
            <span>Meet the Team</span>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => ({}), null)(ResearchTeam)
