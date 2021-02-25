import React from "react"
import Footerv from "../components/Footerv"
import Footer from "../components/Footerv"
import Hero from "../components/Hero"
import Images from "../components/Images"
import Header from "../components/Header"


import Layout from "../components/layout"

import SEO from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
      <Header  />
    <SEO title="Home" />
    <Hero/>
    {/* <Trips heading="Serivces"/>
    <Images heading="Images"/> */}

 </Layout>
)

export default IndexPage
