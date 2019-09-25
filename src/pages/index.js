import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Players from "../components/Players"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <p>Enter names of players to divide into teams.</p>
      <Players></Players>
    </Layout>
  )
}

export default IndexPage
