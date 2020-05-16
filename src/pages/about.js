import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/_global/layout"
import SEO from "../components/_global/seo"
import ResearchTeam from "../components/_global/researchTeam"
import SoftFooterCta from "../components/_global/softFooterCta"

import OurValues from "../components/about/about_ourValues"
import AboutInvestorSolutions from "../components/about/about_investorSolutions"
import CorporatePartners from "../components/about/corporatePartners"
import AboutCarousel from "../components/about/aboutCarousel"

import softFooterBg from "../images/homepage/home_softFooter.png"
import split_hero from "../images/about/split-hero.png"

const AboutPage = () => {
  let marqueeText = [...Array(50).keys()].map((i, idx) => {
    return (
      <span key={idx}>
        INVESTING SHOULD BE EASIER $ EVERYONE DESERVES A FINANCIAL FUTURE $ THIS
        IS NEXT GENERATION INVESTING
      </span>
    )
  })
  return (
    <Layout navTheme="dark">
      <SEO title="About Us" />
      <div id="aboutPage">
        <Container id="aboutHero" fluid className="">
          <Row className="h-100">
            <Col md="12" id="hero-container" className="px-0">
              <div
                id="hero-left"
                style={{ backgroundImage: `url(${split_hero})` }}
              >
                <div className="about_marquee">
                  <h3 className="marquee_path">{marqueeText}</h3>
                </div>
              </div>
              <div id="hero-right">
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed placerat orci, ut interdum magna. Fusce viverra ex vel
                  tempus volutpat. Praesent pellentesque ipsum quis placerat
                  malesuada. Pellentesque ultricies laoreet nisi, suscipit
                  consectetur tellus ullamcorper in. Donec lobortis, sapien ut
                  egestas volutpat, augue urna fringilla turpis, ut pellentesque
                  sem orci. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis sed placerat orci, ut interdum magna. Fusce viverra
                  ex vel tempus volutpat. Praesent pellentesque ipsum quis
                  placerat malesuada. Pellentesque ultricies laoreet nisi,
                  suscipit consectetur tellus ullamcorper in. Donec lobortis,
                  sapien ut egestas volutpat, augue urna fringilla turpis, ut
                  pellentesque sem orci. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis sed placerat orci, ut interdum magna.
                  Fusce viverra ex vel tempus volutpat. Praesent pellentesque
                  ipsum quis placerat malesuada. Pellentesque ultricies laoreet
                  nisi, suscipit consectetur tellus ullamcorper in. Donec
                  lobortis, sapien ut egestas volutpat, augue urna fringilla
                  turpis, ut pellentesque sem orci. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Duis sed placerat orci, ut
                  interdum magna. Fusce viverra ex vel tempus volutpat. Praesent
                  pellentesque ipsum quis placerat malesuada. Pellentesque
                  ultricies laoreet nisi, suscipit consectetur tellus
                  ullamcorper in. Donec lobortis, sapien ut egestas volutpat,
                  augue urna fringilla turpis, ut pellentesque sem orci. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
                  placerat orci, ut interdum magna. Fusce viverra ex vel tempus
                  volutpat. Praesent pellentesque ipsum quis placerat malesuada.
                  Pellentesque ultricies laoreet nisi, suscipit consectetur
                  tellus ullamcorper in. Donec lobortis, sapien ut egestas
                  volutpat, augue urna fringilla turpis, ut pellentesque sem
                  orci.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Container id="aboutTextBlock" fluid className="py-5 bg-yellow">
            <Row className="d-flex justify-content-center">
              <Col xs="12" md="10">
                <h1 className="title">
                  Leveraging decades of experience for a new world.
                </h1>
                <div className="body-copy">
                  The world is changing quickly. We have the experience to help
                  make sure you’re on the right side of that. Our investments
                  are based in the 5th generation of wireless technology, the
                  need for which has become even more apparent in 2020. And we
                  know that the first step towards building wealth is wealth
                  preservation. Our core product is an asset allocation solution
                  that rotates between stocks and bonds, to better returns with
                  less downside risk.
                </div>
              </Col>
            </Row>
          </Container>
          <ResearchTeam />
          <CorporatePartners />
          <OurValues />
          <AboutCarousel />
          <AboutInvestorSolutions />
          <SoftFooterCta
            background={softFooterBg}
            text={
              "The world is changing. We’re here to help you make the most of your financial future by getting ahead of it."
            }
            ctaLead={""}
            cta={"Learn More"}
            link={"/investor-solutions"}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
