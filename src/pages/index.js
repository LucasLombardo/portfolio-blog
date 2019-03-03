import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Header from '../components/home/header'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header />
    </Layout>
)

export default IndexPage
