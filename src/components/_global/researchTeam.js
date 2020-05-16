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

const ResearchTeam = ({ team }) => {
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
      placeholder: file(relativePath: { eq: "team/placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darlene_deremer: file(relativePath: { eq: "team/darlene_deremer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jack_gee: file(relativePath: { eq: "team/jack_gee.png" }) {
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
      spencer_joynt: file(relativePath: { eq: "team/spencer_joynt.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wenjie_chen: file(relativePath: { eq: "team/wenjie_chen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      james_morton: file(relativePath: { eq: "team/james_morton.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let teamMembers = [
    {
      name: "Qindong (Bruce) Liu Ph.D., CFA",
      title: "Chief Executive Officer & Co-Founder",
      img: "bruce_liu",
      leadership_team: true,
      board_of_trustees: false,
      management_team: false,
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
      leadership_team: false,
      board_of_trustees: false,
      management_team: true,
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
      leadership_team: false,
      board_of_trustees: false,
      management_team: true,
      bio:
        "Don is CIO and portfolio manager of Esoterica's asset allocation strategies. He is also spearheads new product design and intellectual-branding. Don brings wide-ranging experiences in asset management: Endowments: at Harvard Management Company, he was a portfolio manager and member of the endowment's prestigious asset allocation committee and Director of Research. Pension Plans: portfolio manager and Director of Risk Management for Dow Chemical Company. Buy-Side: portfolio manager and Director of Research at Wellington Management Company and MFC Global Investment Management (Manulife), where he was Head of Tactical Asset Allocation. Sell-Side & Consulting: designed customized products and solutions for State Street and for Rich Consulting. Don graduated from the University of Illinois with B.S. and M.S. degrees and holds a Ph.D. in Quantitative Finance from Virginia Tech. During his academic career, he received early tenure, published over twenty scientific journal articles, received multiple prestigious research awards, and served as Associate Editor for academic journals.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Wei Wang",
      title: "Portfolio Manager/Senior Analyst",
      img: "placeholder",
      leadership_team: true,
      board_of_trustees: false,
      management_team: false,
      bio:
        "Wei is Portfolio Manager/Senior Analyst of Esoterica Capital, focusing on equity fundamental research. Wei was a senior technology sector equity analyst at Maytech Global Innovation Fund from 2014 to 2015. He founded Bogaya Capital in 2015 and invested in global software, semiconductors and financial technology sectors. Wei graduated from University of Southern California.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Diana Wang",
      title: "Chief Operating Officer",
      img: "placeholder",
      leadership_team: false,
      board_of_trustees: false,
      management_team: true,
      bio:
        "Diana is COO of Esoterica Capital. She was a private equity investor in real estate in New York, from 2013 to 2017, working with JD Capital to co-invest in AC hotels at Dallas and long-term rental apartments at Edison, Texas. She received her B.A & Fine Art from College of Mount Saint Vincent in 2012.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Wenjie Chen",
      title: "Marketing Director",
      img: "wenjie_chen",
      leadership_team: false,
      board_of_trustees: true,
      management_team: false,
      bio:
        "Wenjie is leading Esoterica’s social media marketing strategy. She started her career as a breaking news reporter in XMG (Xiamen, China) TVB (Hong Kong), and Eastern Broadcasting Company (Taipei). She worked as an editor and videographer in PBS Montana and then joined Foreign Policy Association as an editor. Later she became a Finance News Anchor for Sina Corp Wenjie graduated from The University of Montana with a M.S. degree.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Spencer Joynt",
      title: "Creative Director",
      img: "spencer_joynt",
      leadership_team: false,
      board_of_trustees: false,
      management_team: true,
      bio:
        "Spencer is leading Esoterica’s branding strategy and direct-to-consumer initiative. Previously he was focused on brand and experience building. Specifically, creating delight where information and technology come together. Past clients of note have included: Volkswagen, The Washington Post, Tribeca Film Festival, hims, hers, Jetty, Gin Lane, and RCA. Spencer graduated from The University of Texas at Austin.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "James Morton, Ph.D.",
      title: "Chief Scientist, Artificial Intelligence and Big Data",
      img: "james_morton",
      leadership_team: false,
      board_of_trustees: false,
      management_team: true,
      bio:
        "Jamie is Research Fellow at Simons Foundation. His research interest is developing algorithms for performing Bayesian inference on high dimensional datasets commonly obtained for biological and financial applications. Jamie has completed his PhD in Computer Science at the University of California San Diego where he developed software and statistical techniques to study microbial systems. He also has a quadruple major from Miami University with bachelor degrees in Mathematics/Statistics, Computer Science, Engineering Physics and Electrical Engineering.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
  ]

  let board = [
    {
      name: "Frank Savage",
      title: "Director, Board of Advisors",
      img: "placeholder",
      leadership_team: true,
      board_of_trustees: false,
      management_team: false,
      bio:
        "Frank is Chief Executive Officer of Savage Holdings LLC, a global financial services company. Prior to forming Savage Holdings, he was Chairman of Alliance Capital Management International, a division of Alliance Capital Management, a $700 billion asset management subsidiary of AXA Equitable Life Assurance Company. He has a distinguished career in international banking, corporate finance, and global investment management. He has served on the boards of several corporations and not-for-profit organizations, including Bloomberg LP, Lockheed Martin, Qualcomm, and the New York Philharmonic, and as a Trustee Emeritus of the Johns Hopkins University Board. He earned a Bachelor of Arts degree from Howard University, a Master of Arts degree from the Johns Hopkins Nitze School of Advanced International Studies, and was the recipient of an Honorary Doctorate of Humane Letters from Hofstra University and an honorary Doctor of Humanities degree from Howard University.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Darlene DeRemer",
      title: "Chairwoman of Esoterica Thematic Trust",
      img: "darlene_deremer",
      leadership_team: false,
      board_of_trustees: true,
      management_team: false,
      bio:
        "Darlene has over 35 years of experience in diverse roles within financial services including the last 13 years at Grail Partners. Over the course of her career in financial services, she has advised over 250 money management firms with an interesting combination of progressive experiences and significant accomplishments in areas that include mutual funds, ETF's, SMA's, CIT's, product development, strategic planning, defined contribution, operational efficiencies and mergers and acquisitions. Darlene has been an active leader in the fund industry and has served as chair of the Independent Directors’ Council Education Committee and on the IDC's Executive Committee for six years.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Ed McRedmond",
      title: "Trustee of Esoterica Thematic Trust",
      img: "placeholder",
      leadership_team: false,
      board_of_trustees: true,
      management_team: false,
      bio:
        "Ed has over 20 years of experience in the ETF industry in a variety of roles including key accounts and institutional sales/relationship management, platform development, research and model portfolio management. Extensive industry contacts globally among professional buyers, COI’s and gatekeepers across the Broker-Dealer, Global Bank, ETF Strategist and Institutional channels, along with Capital Markets, Index Providers and Exchanges. He was SVP, Director of ETF Institutional & Portfolio Strategies at Invesco US. Ed graduated from Quincy University with a Bachelor degree in Economics.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Jack Gee",
      title: "Trustee of Esoterica Thematic Trust",
      img: "jack_gee",
      leadership_team: true,
      board_of_trustees: false,
      management_team: false,
      bio:
        "Jack was Managing Director and CFO/Treasurer of U.S. iShares at BlackRock from 2004 to 2019. Prior to BlackRock, he was Controller at Paul Capital Partners, responsible for the oversight of the financial, operational and accounting activities of the investments acquired in the secondary market. Jack also served as SVP and CFO/Treasurer at Fremont Investment Advisors, managing all aspects of finance and operations for the firm. Jack graduated from California State University with a Bachelor degree in Accounting and was also a Certified Public Accountant.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
    {
      name: "Yang Ren",
      title: "Portfolio Manager/Senior Analyst",
      img: "placeholder",
      leadership_team: false,
      board_of_trustees: false,
      management_team: true,
      bio:
        "Yang is Portfolio Manager/Senior Analyst of Esoterica Capital, focusing on equity fundamental research. Yang graduated from Peking University followed by master in Financial engineering from University of Michigan. He joined Sanford Bernstein covering US semiconductors in 2014 and the team ranked #1 by Institution Investors for 4 consecutive years from 2015 to 2018.",
      social: {
        linkedin: "",
        twitter: "",
        youtube: "",
        email: "",
      },
    },
  ]

  let ourTeam = teamMembers.map((i, idx) => {
    let preview = i.bio.substring(0, 150)
    preview = preview.substr(
      0,
      Math.min(preview.length, preview.lastIndexOf(" "))
    )
    return (
      <Col key={idx} sm="12" md="4" className="mb-4">
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

  let boardOfTrustees = board.map((i, idx) => {
    let preview = i.bio.substring(0, 150)
    preview = preview.substr(
      0,
      Math.min(preview.length, preview.lastIndexOf(" "))
    )
    return (
      <Col key={idx} sm="12" md="4" className="mb-4">
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
      <Row className="header-row">
        <Col className="d-flex justify-content-center mt-0 mt-md-5">
          <h1 className="section">Our Team</h1>
        </Col>
      </Row>
      <Row className="py-3">{ourTeam}</Row>
      <Row className="header-row">
        <Col className="d-flex justify-content-center mt-0 mt-md-5">
          <h1 className="section">Board of Truestees</h1>
        </Col>
      </Row>
      <Row className="py-3">{boardOfTrustees}</Row>
    </Container>
  )
}

export default connect(state => ({}), null)(ResearchTeam)
