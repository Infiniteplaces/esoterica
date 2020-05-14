import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/_global/layout"
import SEO from "../components/_global/seo"
import ResearchTeam from "../components/_global/researchTeam"
import SoftFooterCta from "../components/_global/softFooterCta"

import OurValues from "../components/about/about_ourValues"
import AboutInvestorSolutions from "../components/about/about_investorSolutions"

import softFooterBg from "../images/homepage/home_softFooter.png"
import split_hero from "../images/about/split-hero.png"

const AboutPage = () => {
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
              ></div>
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
          <Container fluid className="my-5">
            <Row className="d-flex justify-content-center">
              <Col md="10">
                <h1 className="w-75">
                  Leveraging decades of experience for a new generation of
                  investors
                </h1>
                <div className="w-50 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed placerat orci, ut interdum magna. Fusce viverra ex vel
                  tempus volutpat. Praesent pellentesque ipsum quis placerat
                  malesuada. Pellentesque ultricies laoreet nisi, suscipit
                  consectetur tellus ullamcorper in. Donec lobortis, sapien ut
                  egestas volutpat, augue urna fringilla turpis, ut pellentesque
                  sem orci.
                </div>
              </Col>
            </Row>
          </Container>
          <ResearchTeam />
          <OurValues />
          <AboutInvestorSolutions />
          <SoftFooterCta
            background={softFooterBg}
            text={
              "There’s more to investing than just ones and zeros. Learn what we mean here. "
            }
            ctaLead={"Or, "}
            cta={"get started"}
            link={"/investor-solutions"}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
