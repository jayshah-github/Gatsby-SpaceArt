import React from "react"
import Footerv from "../components/Footerv"
import Footer from "../components/Footerv"
import Hero from "../components/Hero"
import Images from "../components/Images"
import Header from "../components/Header"


import Layout from "../components/layout"

import SEO from "../components/seo"
import Trips from "../components/Trips"
import NewHeader from "../components/NewHeader"

const IndexPage = () => (
  <Layout>
    <SEO title="Images" />
    <NewHeader bgChange  />
    <Trips heading="Services">
    <Footerv/>
        </Trips>
   
 </Layout>
)

export default IndexPage