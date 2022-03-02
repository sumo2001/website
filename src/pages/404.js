import React from "react"
import logo from "./404.gif"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="errorpage">
        <img src={logo} alt="howle"  />
    </div>
  </Layout>
)

export default NotFoundPage
