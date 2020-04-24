import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/_global/layout"
import Image from "../components/_global/image"
import SEO from "../components/_global/seo"

import HomeHero from "../components/homeHero"
import HomeBlog from "../components/homeBlog"
import HomeOurPhilosophy from "../components/homeOurPhilosophy"
import HomeOurFunds from "../components/homeOurFunds"
import EmailCapture from "../components/emailCapture"
import ResearchTeam from "../components/researchTeam"
import HomePress from "../components/homePress"
import HomeResources from "../components/homeResources"
import HomeGetStarted from "../components/homeGetStarted"

const IndexPage = ({ mobile }) => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <HomeBlog />
    <HomeOurPhilosophy />
    <HomeOurFunds />
    {mobile ? "" : <EmailCapture />}
    <ResearchTeam />
    <HomePress />
    {mobile ? <EmailCapture /> : ""}
    <HomeResources />
    <HomeGetStarted />
  </Layout>
)

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(IndexPage)
