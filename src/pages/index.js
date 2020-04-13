import React from "react"
import { Link } from "gatsby"

import Layout from "../components/_global/layout"
import Image from "../components/_global/image"
import SEO from "../components/_global/seo"

import HomeHero from "../components/homeHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
  </Layout>
)

export default IndexPage
