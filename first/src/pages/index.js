import React from "react"
import SEO from "../components/seo"


import Splash from "../components/Splash"
import Navbar from '../components/Navbar'
import Content from '../components/Content'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Splash />
    <Content />
  </>
)

export default IndexPage
