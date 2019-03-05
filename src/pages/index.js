import React, { useRef } from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Nav from "../components/shared/nav"
import Header from '../components/home/header'

const IndexPage = () => {
    const navRefs = [ useRef(null), useRef(null), useRef(null) ]

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Nav refs={navRefs} />
            <Header />
            <div ref={navRefs[0]} id="about" style={{ height: `150vh`, background: `#fff` }} />
            <div ref={navRefs[1]} id="about" style={{ height: `150vh`, background: `#ccc` }} />
            <div ref={navRefs[2]} id="about" style={{ height: `150vh`, background: `#fff` }} />
        </Layout>
    )
}

export default IndexPage
