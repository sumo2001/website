import React from "react"
import Layout from "../components/layout"
import logo from './404.gif'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img src={logo} alt="loading..." 
        height={350}
        width={700}
        style={{ alignSelf: 'center' }}
/>
  </Layout>
)

export default NotFoundPage




