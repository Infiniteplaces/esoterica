import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col, Modal } from "reactstrap"
import Img from "gatsby-image"

import expand from "../../images/icons/expand.svg"
import expand_hover from "../../images/icons/expand_hover.svg"

import linkedin_black from "../../images/icons/linkedin.svg"
import youtube_black from "../../images/icons/youtube.svg"
import twitter_black from "../../images/icons/twitter.svg"
import mail_black from "../../images/icons/mail.svg"

import modal_close from "../../images/icons/modal_close.svg"

const TEAM = [
  {
    name: "Qindong (Bruce) Liu Ph.D., CFA",
    title: "Chief Executive Officer & Co-Founder",
    img: "bruce_liu",
    homepage: true,
    bio:
      "Bruce manages WUGI, Esoterica's active ETF investing in 5G-enabled digital economy. Prior to Esoterica, he was a portfolio manager and partner of PhaseCapital. He was an equity strategist at WisdomTree Asset Management and a sell-side equity strategist at Sanford Bernstein. Bruce started his investment career at Dow Chemical Pension Fund. He received his Ph.D. in Business Administration from University of Connecticut and holds the Chartered Financial Analyst (CFA) designation.",
    social: {
      linkedin: "",
      twitter: "",
      youtube: "",
      email: "",
    },
  },
  {
    name: "Karan Trehan",
    title: "Executive Chairman & Co-Founder",
    img: "karan_trehan",
    homepage: true,
    bio:
      "Karan has been in international finance for four decades, principally based in New York City. After careers at The World Bank and Goldman Sachs (where was an early member of the international fixed income group) and AllianceBernstein (where as President & CEO, International he launched Alliance's early thrust into offshore funds and strategic alliances), he established a boutique investment management company, Ankar Capital, to invest private equity in Asia and in Asia-centric hedge funds. He was also the Founder and Managing Partner of Emerging Managers Group, an offshore fund platform, later sold to a US mutual fund complex. Karan studied Economics at Delhi University, India followed by an MBA from IMD, Switzerland. He has served on the boards of several US-based and international mutual funds and has been a trustee of the United World Colleges.",
    social: {
      linkedin: "",
      twitter: "",
      youtube: "",
      email: "",
    },
  },
  {
    name: "Don Rich Ph.D.",
    title: "Chief Investment Officer & Co-Founder",
    img: "don_rich",
    homepage: true,
    bio:
      "Don is CIO and portfolio manager of Esoterica's asset allocation strategies. He is also spearheads new product design and intellectual-branding. Don brings wide-ranging experiences in asset management: Endowments: at Harvard Management Company, he was a portfolio manager and member of the endowment's prestigious asset allocation committee and Director of Research. Pension Plans: portfolio manager and Director of Risk Management for Dow Chemical Company. Buy-Side: portfolio manager and Director of Research at Wellington Management Company and MFC Global Investment Management (Manulife), where he was Head of Tactical Asset Allocation. Sell-Side & Consulting: designed customized products and solutions for State Street and for Rich Consulting. Don graduated from the University of Illinois with B.S. and M.S. degrees and holds a Ph.D. in Quantitative Finance from Virginia Tech. During his academic career, he received early tenure, published over twenty scientific journal articles, received multiple prestigious research awards, and served as Associate Editor for academic journals.",
    social: {
      linkedin: "",
      twitter: "",
      youtube: "",
      email: "",
    },
  },
]

const ResearchTeam = ({ homepage }) => {
  let [modal, setModal] = useState(null)

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

  let modules = TEAM.map((i, idx) => {
    let preview = i.bio.substring(0, 150)
    preview = preview.substr(
      0,
      Math.min(preview.length, preview.lastIndexOf(" "))
    )
    return (
      <Col key={idx} sm="12" md="4" className="mb-3 mb-md-0">
        <div className="team-member" onClick={() => setModal(i.img)}>
          <div className="img-container">
            <Img
              className="team-img"
              fluid={data[i.img].childImageSharp.fluid}
            />
          </div>
          <div className="eyebrow">{i.title}</div>
          <div className="d-flex justify-content-between align-items-center">
            <h4>{i.name}</h4>
          </div>
          <div className="about pt-4">
            {preview}... <span className="eyebrow underline">Read More</span>
          </div>
        </div>
        <Modal
          toggle={() => setModal(null)}
          isOpen={modal === i.img}
          className="team-member-modal"
        >
          <div className="close" onClick={() => setModal(null)}>
            <img src={modal_close} alt="" />
          </div>
          <Container fluid className="team-member-modal-container">
            <Row className="d-flex flex-column flex-md-row align-items-start">
              <Col>
                <div className="modal-image-container mb-3 mb-md-0">
                  <Img
                    className="modal-team-img"
                    fluid={data[i.img].childImageSharp.fluid}
                  />
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="body-small">{i.title}</div>
                    <h3 className="pb-3">{i.name}</h3>
                    <p className="pb-3">{i.bio}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="social-container">
                    <div className="eyebrow">Connect</div>
                    <div className="social">
                      <a
                        href={"https://twitter.com/" + i.social.twitter}
                        target="_blank"
                        rel="norefferer noopener"
                      >
                        <img
                          src={twitter_black}
                          alt="twitter"
                          className="twitter-icon"
                          width="16px"
                        />
                      </a>
                      <a
                        href={
                          "https://www.linkedin.com/company/" +
                          i.social.linkedin
                        }
                        target="_blank"
                        rel="norefferer noopener"
                      >
                        <img
                          src={linkedin_black}
                          alt="linkedin"
                          className="linkedin-icon"
                          width="17px"
                        />
                      </a>
                      <a
                        href={
                          "https://www.youtube.com/channel/" + i.social.youtube
                        }
                        target="_blank"
                        rel="norefferer noopener"
                      >
                        <img
                          src={youtube_black}
                          alt="youtube"
                          className="youtube-icon"
                          width="21px"
                        />
                      </a>
                      <a href={"mailto:" + i.social.email}>
                        <img
                          src={mail_black}
                          alt="mail"
                          className="mail-icon"
                          width="19"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal>
      </Col>
    )
  })

  return (
    <Container id="researchTeam" fluid>
      <Row className="d-flex py-3">
        <Col>
          <h1 className="section">Research Team</h1>
        </Col>
      </Row>
      <Row className="py-3">{modules}</Row>
      {homepage ? (
        <Row className="py-md-3">
          <Col className="d-flex justify-content-center">
            <Link className="button secondary full-width" to="/about">
              <span>Meet the Team</span>
            </Link>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Container>
  )
}

export default connect(state => ({}), null)(ResearchTeam)
