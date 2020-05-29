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

import modal_close from "../../images/icons/modal_close_white.svg"
import modal_close_mobile from "../../images/icons/close-white.svg"

const ResearchTeam = ({ team, mobile }) => {
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
      ed_mcredmond: file(relativePath: { eq: "team/ed_mcredmond.png" }) {
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
      monique_labbe: file(relativePath: { eq: "team/monique_labbe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wei_wang: file(relativePath: { eq: "team/wei_wang.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yue_sai_kan: file(relativePath: { eq: "team/yue_sai_kan.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nancy_tyminski: file(relativePath: { eq: "team/nancy_tyminski.png" }) {
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
      title: "Chief Executive Officer",
      img: "bruce_liu",
      bio:
        "Bruce manages WUGI, Esoterica's active ETF investing in 5G-enabled digital economy. Prior to Esoterica, he was a portfolio manager and partner of PhaseCapital. He was an equity strategist at WisdomTree Asset Management and a sell-side equity strategist at Sanford Bernstein. Bruce started his investment career at Dow Chemical Pension Fund. He received his Ph.D. in Business Administration from University of Connecticut and holds the Chartered Financial Analyst (CFA) designation.",
      social: {
        linkedin: "https://www.linkedin.com/in/qindong-bruce-liu-bb44919/",
        twitter: "https://twitter.com/tausagi",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "bruce.liu@esotericacap.com",
      },
    },
    {
      name: "Karan Trehan",
      title: "Executive Chairman",
      img: "karan_trehan",
      bio:
        "Karan has been in international finance for four decades, principally based in New York City. After careers at The World Bank and Goldman Sachs (where was an early member of the international fixed income group) and AllianceBernstein (where as President & CEO, International he launched Alliance's early thrust into offshore funds and strategic alliances), he established a boutique investment management company, Ankar Capital, to invest private equity in Asia and in Asia-centric hedge funds. He was also the Founder and Managing Partner of Emerging Managers Group, an offshore fund platform, later sold to a US mutual fund complex. Karan studied Economics at Delhi University, India followed by an MBA from IMD, Switzerland. He has served on the boards of several US-based and international mutual funds and has been a trustee of the United World Colleges.",
      social: {
        linkedin: "http://linkedin.com/in/karan-trehan-4876a5a1",
        twitter: "https://twitter.com/Trehan5Karan",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "karan.trehan@esotericacap.com",
      },
    },
    {
      name: "Don Rich Ph.D.",
      title: "Chief Investment Officer",
      img: "don_rich",
      bio:
        "Don brings wide-ranging experiences in asset management: Harvard Management Company, where he was a portfolio manager and member of the endowment’s prestigious asset allocation committee and Director of Research; Dow Pension, where he was portfolio manager and Director of Research; Wellington Management Company and MFC Global Investment Management (Manulife), where he was Head of Tactical Asset Allocation; State Street, where he designed customized products and solutions and for Rich Consulting. Don graduated from the University of Illinois with B.S. and M.S. degrees and holds a Ph.D. in Quantitative Finance from Virginia Tech. During his academic career, he received early tenure, published over twenty scientific journal articles, received multiple prestigious research awards, and served as Associate Editor for academic journals.",
      social: {
        linkedin: "https://www.linkedin.com/in/don-rich-7886b611/",
        twitter: "https://twitter.com/InsightsRich",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "don.rich@esotericacap.com",
      },
    },
    {
      name: "Wei Wang",
      title: "Portfolio Manager/Senior Analyst",
      img: "wei_wang",
      bio:
        "Wei is Portfolio Manager/Senior Analyst of Esoterica Capital, focusing on equity fundamental research. Wei was a senior technology sector equity analyst at Maytech Global Innovation Fund from 2014 to 2015. He founded Bogaya Capital in 2015 and invested in global software, semiconductors and financial technology sectors. Wei graduated from University of Southern California.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "wei.wang@esotericacap.com",
      },
    },
    {
      name: "Diana Wang",
      title: "Chief Operating Officer",
      img: "diana_wang",
      bio:
        "Diana is COO of Esoterica Capital. She was a private equity investor in real estate in New York, from 2013 to 2017, working with JD Capital to co-invest in AC hotels at Dallas and long-term rental apartments at Edison, Texas. She received her B.A & Fine Art from College of Mount Saint Vincent in 2012.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "diana.wang@esotericacap.com",
      },
    },
    {
      name: "Wenjie Chen",
      title: "Marketing Director",
      img: "wenjie_chen",
      bio:
        "Wenjie is leading Esoterica’s social media marketing strategy. She started her career as a breaking news reporter in XMG (Xiamen, China) TVB (Hong Kong), and Eastern Broadcasting Company (Taipei). She worked as an editor and videographer in PBS Montana and then joined Foreign Policy Association as an editor. Later she became a Finance News Anchor for Sina Corp Wenjie graduated from The University of Montana with a M.S. degree.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "wenjie.chen@esotericacap.com",
      },
    },
    {
      name: "Spencer Joynt",
      title: "Creative Director",
      img: "spencer_joynt",
      bio:
        "Spencer is leading Esoterica’s branding strategy and direct-to-consumer initiative. Previously he was focused on brand and experience building. Specifically, creating delight where information and technology come together. Past clients of note have included: Volkswagen, The Washington Post, Tribeca Film Festival, hims, hers, Jetty, Gin Lane, and RCA. Spencer graduated from The University of Texas at Austin.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "spencer.joynt@esotericacap.com",
      },
    },
    {
      name: "James Morton, Ph.D.",
      title: "Chief Scientist, Artificial Intelligence and Big Data",
      img: "james_morton",
      bio:
        "Jamie is Research Fellow at Simons Foundation. His research interest is developing algorithms for performing Bayesian inference on high dimensional datasets commonly obtained for biological and financial applications. Jamie has completed his PhD in Computer Science at the University of California San Diego where he developed software and statistical techniques to study microbial systems. He also has a quadruple major from Miami University with bachelor degrees in Mathematics/Statistics, Computer Science, Engineering Physics and Electrical Engineering.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "james.morton@esotericacap.com",
      },
    },
    {
      name: "Monique Labbe",
      title: "Treasurer & Principal Financial Officer, Esoterica Trust",
      img: "monique_labbe",
      bio:
        "Monique provides outsourced treasurer and principal financial officer solutions to Esoterica. Prior to joining Foreside, she held leadership positions at State Street Global Advisors and State Street Bank and Trust which included fund administration, fund accounting, mutual fund operations and product development. She received her BS in Accounting from the University of Massachusetts-Dartmouth and an MBA from Boston College.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "monique.labbe@esotericacap.com",
      },
    },
    {
      name: "Nancy Tyminski",
      title: "Chief Compliance Officer, Esoterica Trust",
      img: "nancy_tyminski",
      bio:
        "Nancy provides outsourced compliance solutions to registered funds. Prior to joining Foreside in 2015, she held various senior compliance roles including Deputy Chief Compliance Officer at PNC Bank (Funds Group), Director of Corporate Compliance at Nationwide Funds Group, and Chief Compliance Officer at Nikko Asset Management, LTD.  Additionally, Nancy held leadership positions in the program trading division of BNP Paribas Asset Management (formerly known as CooperNeff Advisors, Inc.).  She received a BA in English from the University of Pennsylvania.",
      social: {
        linkedin: "https://www.linkedin.com/company/esoterica-capital/about/",
        twitter: "https://twitter.com/esotericacap?lang=en",
        youtube: "https://www.youtube.com/channel/UClBaJptKDg9-SkmTNfzaZUw",
        email: "nancy.tyminski@esotericacap.com",
      },
    },
  ]

  let board = [
    {
      name: "Darlene DeRemer",
      title: "Chairwoman of Esoterica Thematic Trust",
      img: "darlene_deremer",
      bio:
        "Darlene has over 35 years of experience in diverse roles within financial services including the last 13 years at Grail Partners. Over the course of her career in financial services, she has advised over 250 money management firms with an interesting combination of progressive experiences and significant accomplishments in areas that include mutual funds, ETF's, SMA's, CIT's, product development, strategic planning, defined contribution, operational efficiencies and mergers and acquisitions. Darlene has been an active leader in the fund industry and has served as chair of the Independent Directors’ Council Education Committee and on the IDC's Executive Committee for six years.",
      social: {
        email: "dtderemer@gmail.com",
      },
    },
    {
      name: "Ed McRedmond",
      title: "Trustee of Esoterica Thematic Trust",
      img: "ed_mcredmond",
      bio:
        "Ed has over 20 years of experience in the ETF industry in a variety of roles including key accounts and institutional sales/relationship management, platform development, research and model portfolio management. Extensive industry contacts globally among professional buyers, COI’s and gatekeepers across the Broker-Dealer, Global Bank, ETF Strategist and Institutional channels, along with Capital Markets, Index Providers and Exchanges. He was SVP, Director of ETF Institutional & Portfolio Strategies at Invesco US. Ed graduated from Quincy University with a Bachelor degree in Economics.",
      social: {
        email: "mcredmond1@gmail.com",
      },
    },
    {
      name: "Jack Gee",
      title: "Trustee of Esoterica Thematic Trust",
      img: "jack_gee",
      bio:
        "Jack was Managing Director and CFO/Treasurer of U.S. iShares at BlackRock from 2004 to 2019. Prior to BlackRock, he was Controller at Paul Capital Partners, responsible for the oversight of the financial, operational and accounting activities of the investments acquired in the secondary market. Jack also served as SVP and CFO/Treasurer at Fremont Investment Advisors, managing all aspects of finance and operations for the firm. Jack received his MBA from Saint Mary’s College of California, his BS in Accounting from California State University and was also a Certified Public Accountant.",
      social: {
        email: "j-gee@sbcglobal.net",
      },
    },
  ]

  let advisors = [
    {
      name: "Frank Savage",
      title: "Director, Board of Advisors",
      img: "placeholder",
      bio:
        "Frank is Chief Executive Officer of Savage Holdings LLC, a global financial services company. Prior to forming Savage Holdings, he was Chairman of Alliance Capital Management International, a division of Alliance Capital Management, a $700 billion asset management subsidiary of AXA Equitable Life Assurance Company. He has a distinguished career in international banking, corporate finance, and global investment management. He has served on the boards of several corporations and not-for-profit organizations, including Bloomberg LP, Lockheed Martin, Qualcomm, and the New York Philharmonic, and as a Trustee Emeritus of the Johns Hopkins University Board. He earned a Bachelor of Arts degree from Howard University, a Master of Arts degree from the Johns Hopkins Nitze School of Advanced International Studies, and was the recipient of an Honorary Doctorate of Humane Letters from Hofstra University and an honorary Doctor of Humanities degree from Howard University.",
      social: {
        email: "fsavage@savageholdings.com",
      },
    },
    {
      name: "Yue-Sai Kan",
      title: "Co-Chairman of the China Institute",
      img: "yue_sai_kan",
      bio:
        "Yue-Sai Kan is an Emmy-winning television host and producer, successful entrepreneur, fashion icon, bestselling author and humanitarian.  People magazine called her 'the most famous woman in China' and Time magazine proclaimed her 'the Queen of the Middle Kingdom.' Yue-Sai’s weekly television series 'Looking East', was the first of its kind to introduce Asian cultures and customs to a growing and receptive American audience and later shows amassed a weekly viewership of 300 million. Yue-Sai’s other TV credits include the ABC documentary 'China Walls and Bridges', which earned her a Emmy Award. Yue-Sai founded Yue-Sai Cosmetics which grew into China’s leading Cosmetics Company, later purchased by L'Oreal.  Additionally, she has written 9 best-selling books, and in 2000, became the first and only living American featured on a Chinese government-issued postage stamp.  Yue-Sai has been deeply involved in charities and has served on the boards of prominent charitable organizations in China and the United States.",
      social: {
        email: "ny@yuesaikan.net",
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
            <img src={mobile ? modal_close_mobile : modal_close} alt="" />
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
                        href={i.social.twitter}
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
                        href={i.social.linkedin}
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
                        href={i.social.youtube}
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
            <img src={mobile ? modal_close_mobile : modal_close} alt="" />
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
                    <h3 className="pb-3">{i.name}</h3>
                    <p className="pb-3">{i.bio}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="social-container">
                    <div className="eyebrow">Connect</div>
                    <div className="social">
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

  let boardOfAdvisors = advisors.map((i, idx) => {
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
                    <h3 className="pb-3">{i.name}</h3>
                    <p className="pb-3">{i.bio}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="social-container">
                    <div className="eyebrow">Connect</div>
                    <div className="social">
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
          <h1 className="section">Board of Trustees</h1>
        </Col>
      </Row>
      <Row className="py-3">{boardOfTrustees}</Row>
      <Row className="header-row">
        <Col className="d-flex justify-content-center mt-0 mt-md-5">
          <h1 className="section">Board of Advisors</h1>
        </Col>
      </Row>
      <Row className="py-3">{boardOfAdvisors}</Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(ResearchTeam)
