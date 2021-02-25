/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footerv from "../components/Footerv"
import Footer from "../components/Footerv"
import Hero from "../components/Hero"
import Images from "../components/Images"

import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"


const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle/>
    
      
     <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
