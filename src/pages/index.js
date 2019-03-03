import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2>Hi</h2>
    </Layout>
)

export default IndexPage
