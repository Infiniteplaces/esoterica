import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import firebase from "gatsby-plugin-firebase"
import { Container, Row, Col, Modal } from "reactstrap"
import { moment } from "moment"
import Layout from "../../../components/_global/layout"
import SEO from "../../../components/_global/seo"

import modal_close from "../../../images/icons/modal_close.svg"
import modal_arrow from "../../../images/icons/arrow-diag-black.svg"

const WUGI = ({}) => {
  let [performance, setPerformance] = useState(null)
  let [positions, setPositions] = useState(null)
  let [historical, setHistorical] = useState(null)
  let [modal, setModal] = useState(false)

  useEffect(() => {
    let today = new Date()

    let backDate = 1
    if (today.getDay() === 0) {
      backDate = 2
    }
    if (today.getDay() === 1) {
      backDate = 3
    }

    today = today.setDate(today.getDate() - backDate)

    let yesterday = new Date(today)

    yesterday = yesterday
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      })
      .split(" ")

    yesterday = yesterday[0] + "-" + yesterday[1] + "-" + yesterday[2]

    _getDailyPositions(yesterday)
    _getDailyPerformance(yesterday)
    _getHistoricalData()
  }, [])

  async function _getHistoricalData() {
    let historical = await firebase
      .firestore()
      .collection("historical")
      .get()

    setHistorical(historical.docs.map(doc => doc.data()))
  }

  async function _getDailyPositions(date) {
    let positions = await firebase
      .firestore()
      .collection(date.toUpperCase())
      .doc("BBH_Position")
      .collection("data")
      .get()

    setPositions(positions.docs.map(doc => doc.data()))
  }

  function _getDailyPerformance(date) {
    let daily = firebase
      .firestore()
      .collection(date.toUpperCase())
      .doc("BBH_Daily")
      .get()
      .then(
        function(doc) {
          if (doc.exists) {
            setPerformance(doc.data())
          } else {
            console.log("Daily performance data not in Firebase")
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("Error getting document:", error)
      })
  }

  if (!performance || !positions) {
    return ""
  }

  let topTenPositions = positions
    .sort(function(a, b) {
      return (
        parseFloat(b["Market Value Weight"].split("%")[0]) -
        parseFloat(a["Market Value Weight"].split("%")[0])
      )
    })
    .slice(0, 10)

  return (
    <Layout>
      <SEO title="WUGI 5G" />
      <div id="wugi" className="productPage">
        <div className="hero">
          <h1 className="pb-4">Esoterica WUGI ETF</h1>
          <div className="w-100 d-flex justify-content-between">
            <h3 className="d-flex align-items-end w-75">
              Esoterica’s signature ETF for all. Based in future technologies,
              backed by industry-leading experts.
            </h3>
            <div className="button secondary" onClick={() => setModal(true)}>
              Buy Funds
            </div>
          </div>
        </div>

        <Modal
          toggle={() => setModal(false)}
          isOpen={modal}
          className="buy-funds-modal"
        >
          <Container fluid className="buy-funds-modal-container">
            <Row style={{ height: "10%" }} className="header-row">
              <Col className="d-flex justify-content-center align-items-start">
                <h3>Choose Brokerage</h3>
                <div className="close" onClick={() => setModal(false)}>
                  <img src={modal_close} alt="" />
                </div>
              </Col>
            </Row>
            <Row style={{ height: "90%" }} className="body-row">
              <Col className="d-flex flex-column justify-content-around align-items-center">
                <h2>
                  <a href="https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&reinitiate-handshake=0&prospectnavyear=2011&AuthnContext=prospect&env=PRD&symbol=WUGI&rsO=new&country=US">
                    E*TRADE
                  </a>
                  <img src={modal_arrow} alt="" />
                </h2>
                <h2>
                  <a href="https://screener.fidelity.com/ftgw/etf/goto/snapshot/snapshot.jhtml?symbols=WUGI">
                    Fidelity
                  </a>
                  <img src={modal_arrow} alt="" />
                </h2>
                <h2>
                  <a href="https://robinhood.com/stocks/WUGI">Robinhood</a>
                  <img src={modal_arrow} alt="" />
                </h2>
                <h2>
                  <a href="">Trade Station</a>
                  <img src={modal_arrow} alt="" />
                </h2>
                <h2>
                  <a href="">Ally Invest</a>
                  <img src={modal_arrow} alt="" />
                </h2>
                <h2>
                  <a href="">Tradier Brokerage</a>
                  <img src={modal_arrow} alt="" />
                </h2>
              </Col>
            </Row>
          </Container>
        </Modal>

        <Container fluid>
          <Row className="fund-details-row">
            <Col
              md={{ size: 9, offset: 3 }}
              className="border-top border-black pl-0 pt-3"
            >
              <h1>Fund Details</h1>
              <div className="py-5 d-flex">
                <div className="left-col d-flex flex-column">
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">Ticker</div>
                    <div>{performance["Ticker Symbol"]}</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">Fund Type</div>
                    <div>Active Equity ETF</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">CUSIP</div>
                    <div>{performance["CUSIP"]}</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">Primary Exchange</div>
                    <div>Cboe BZX Exchange</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">Inception Date</div>
                    <div>{performance["Inception Date (Fund)"]}</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">Net Assets</div>
                    <div>{performance["Total Net Assets"]}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="eyebrow">GROSS EXPENSE RATIO</div>
                    <div>0.98%</div>
                  </div>
                </div>
                <div className="right-col d-flex flex-column">
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">NET EXPENSE RATIO</div>
                    <div>0.75%</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">TYPICAL # OF HOLDINGS</div>
                    <div>25-45</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">SHARES OUTSTANDING</div>
                    <div>{performance["Shares Outstanding"]}</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">30 DAY MEDIAN</div>
                    <div>N/A</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">IOPV TICKER</div>
                    <div>WUGIIV</div>
                  </div>
                  <div className="d-flex justify-content-between pb-1">
                    <div className="eyebrow">PORTFOLIO MANAGERS</div>
                    <div>Qingdong Liu</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="fund-description-row">
            <Col
              md={{ size: 9, offset: 3 }}
              className="border-top border-black pl-0 pt-3"
            >
              <h1>Fund Description</h1>
              <p className="d-flex pt-5 w-75">
                WUGI is an actively-managed ETF that will invest in US and
                non-US equity securities of companies that are meaningfully
                participating in a digital economy enabled by fifth generation
                digital cellular network (“5G”) technology. The investment
                objective of the Fund is to seek capital appreciation.
              </p>
              <p className="d-flex pb-5 w-75">
                Esoterica believes that 5G will empower the next generation of
                technology that will give rise to a global digital economy. WUGI
                invests in companies that are exposed to, and benefit from,
                advanced silicon architecture and manufacturing, convergence of
                5G wireless network and cloud computing, new software stack that
                addresses the exponential growth of data, and enabling
                technologies across a range of verticals.
              </p>
            </Col>
          </Row>
          <Row className="fund-documents-row">
            <Col
              md={{ size: 9, offset: 3 }}
              className="border-top border-black pl-0 pt-3"
            >
              <h1>Fund Documents</h1>
              <div className="py-5 document-container">
                <div className="py-1 d-flex justify-content-between">
                  <div className="">
                    <a href="/" className="underline">
                      Prospectus
                    </a>
                  </div>
                </div>
                <div className="py-1 d-flex justify-content-between">
                  <div className="">
                    <a href="/" className="underline">
                      SAI
                    </a>
                  </div>
                </div>
                <div className="py-1 d-flex justify-content-between">
                  <div className="">
                    <a href="/" className="underline">
                      Fund Holding CSV
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="fund-performance-row">
            <Col
              md={{ size: 9, offset: 3 }}
              className="border-top border-black pl-0 pt-3"
            >
              <h1>WUGI Performance</h1>
              <Row className="w-100 m-0 py-5">
                <Col className="">
                  <Row className="header-row">
                    <Col>WUGI ETF</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>NAV</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>Market Price</Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>3 Months</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>00.00%</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>00.00%</Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>YTD</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>00.00%</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>00.00%</Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>1 Year</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>00.00%</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>00.00%</Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>3 Years (Annualized)</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>00.00%</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>00.00%</Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>5 Years (Annualized)</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>00.00%</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>00.00%</Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>Since (Annualized)</Col>
                  </Row>
                  <Row className="nav-row">
                    <Col>00.00%</Col>
                  </Row>
                  <Row className="mp-row">
                    <Col>00.00%</Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="body-small mt-2 mb-5 w-75">
                    *Past performance does not guarantee future results.The
                    performance data quoted represents past performance and
                    current returns may be lower or higher.The investment return
                    and principal will fluctuate so that an investor’s shares
                    when redeemed may be worth more or less than the original
                    cost.The Fund’s most recent month-end performance can be
                    found in the fund material section. Returns for less than
                    one year are not annualized. Net asset value (“NAV”) returns
                    are based on the dollar value of a single share of the ETF,
                    calculated using the value of the underlying assets of the
                    ETF minus its liabilities, divided by the number of shares
                    outstanding.The NAV is typically calculated at 4:00 pm
                    Eastern time on each business day the NewYork Stock Exchange
                    is open for trading. Market returns are based on the trade
                    price at which shares are bought and sold on the NYSE Arca,
                    Inc. using the last share trade. Market performance does not
                    represent the returns you would receive if you traded shares
                    at other times.Total Return reflects reinvestment of
                    distributions on ex-date for NAV returns and payment date
                    for Market Price returns.The market price of the ETF’s
                    shares may differ significantly from their NAV during
                    periods of market volatility.
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="fund-holdings-row">
            <Col
              md={{ size: 9, offset: 3 }}
              className="border-top border-black pl-0 pt-3"
            >
              <h1>Top 10 Holdings</h1>
              <Row className="w-100 m-0 py-5">
                <Col className="">
                  <Row className="header-row">
                    <Col>Weight</Col>
                  </Row>
                  {topTenPositions.map((i, idx) => {
                    return (
                      <Row key={idx} className="holdings-row">
                        <Col>{i["Market Value Weight"]}</Col>
                      </Row>
                    )
                  })}
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>Company</Col>
                  </Row>
                  {topTenPositions.map((i, idx) => {
                    return (
                      <Row key={idx} className="holdings-row">
                        <Col>{i["Description"]}</Col>
                      </Row>
                    )
                  })}
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>Ticker</Col>
                  </Row>
                  {topTenPositions.map((i, idx) => {
                    return (
                      <Row key={idx} className="holdings-row">
                        <Col>{i["Ticker"]}</Col>
                      </Row>
                    )
                  })}
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>Market Price</Col>
                  </Row>
                  {topTenPositions.map((i, idx) => {
                    return (
                      <Row key={idx} className="holdings-row">
                        <Col>{i["Security Price"]}</Col>
                      </Row>
                    )
                  })}
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>Shares Held</Col>
                  </Row>
                  {topTenPositions.map((i, idx) => {
                    return (
                      <Row key={idx} className="holdings-row">
                        <Col>{i["Shares"]}</Col>
                      </Row>
                    )
                  })}
                </Col>
                <Col>
                  <Row className="header-row">
                    <Col>Market Value</Col>
                  </Row>
                  {topTenPositions.map((i, idx) => {
                    return (
                      <Row key={idx} className="holdings-row">
                        <Col>{i["Market Value"]}</Col>
                      </Row>
                    )
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
          <h1 className="py-5">Disclosures</h1>
          <Row className="disclosure-row ">
            <Col md="6">
              <p>
                Before investing you should carefully consider the Fund’s
                investment objectives, risks, charges and expenses. This and
                other information are contained in the prospectus. Please read
                the prospectus carefully before investing.
              </p>
              <p>
                The principal risks of investing in the ARKK include: Equity
                Securities Risk. The value of the equity securities the Fund
                holds may fall due to general market and economic conditions.
                Health Care Sector Risk. The health care sector may be adversely
                affected by government regulations and government health care
                programs. Industrials Sector Risk. Companies in the industrials
                sector may be adversely affected by changes in government
                regulation, world events, economic conditions, environmental
                damages, product liability claims and exchange rates.
                Information Technology Sector Risk. Information technology
                companies face intense competition, both domestically and
                internationally, which may have an adverse effect on profit
                margins. Cryptocurrency Risk. Cryptocurrency (notably, bitcoin),
                often referred to as ‘‘virtual currency’’ or ‘‘digital
                currency,’’ operates as a decentralized, peer-to-peer financial
                exchange and value storage that is used like money. The Fund may
                have exposure to bitcoin, a cryptocurrency, indirectly through
                an investment in the Bitcoin Investment Trust (‘‘GBTC’’), a
                privately offered, open-end investment vehicle. Cryptocurrency
                operates without central authority or banks and is not backed by
                any government. Even indirectly, cryptocurrencies may experience
                very high volatility and related investment vehicles like GBTC
                may be affected by such volatility. As a result of holding
                cryptocurrency, the Fund may also trade at a significant premium
                to NAV. Cryptocurrency is also not legal tender. Federal, state
                or foreign governments may restrict the use and exchange of
                cryptocurrency, and regulation in the U.S. is still developing.
                Cryptocurrency exchanges may stop operating or permanently shut
                down due to fraud, technical glitches, hackers or malware.
                Additional risks of investing in ARKK include foreign
                securities, market, management and non-diversification risks.
                Detailed information regarding the specific risks of ARKK can be
                found in the ETF’s prospectus.
              </p>
              <p>
                Portfolio holdings will change and should not be considered as
                investment advice or a recommendation to buy, sell or hold any
                particular security.
              </p>
            </Col>
            <Col md="6">
              <p>Award Disclosure</p>
              <p>
                [1] Other Finalists Other Finalists “Active ETF of the Year”
                2018: TrimTabs All Cap U.S. Free-Cash-Flow ETF (TTAC), WBI
                BullBear Yield 1000 ETF (WBIG), WisdomTree U.S. Quality
                Shareholder Yield Fund (QSY); | Methodology: Ranking Entity:
                Fund Intelligence; Length of the period: 12 Months; Criteria on
                which the ranking is based: The winners are comprised of the
                individuals and firms who have been nominated via the online
                submission process and through recommendations from market
                participants. Judges will use the submitted application
                material, as well as any uploaded supplemental information, to
                make a determination on the firm, individual or product they
                believe to be the most suitable and deserving winners for each
                category. The Judges’ Choice Awards are adjudicated by a panel
                of industry experts convened by the Fund Action and Fund
                Directions editorial teams. The industry judges contribute their
                sector expertise to debate the merits of shortlist candidates to
                come to a decision on the winners. (Award Page:
                mutualfundindustryawards.awardstage.com/)
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default connect(state => ({ mobile: state.global.mobile }), null)(WUGI)
