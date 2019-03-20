import React, { useRef } from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Nav from "../components/shared/nav"
import Header from '../components/home/header'
import About from "../components/home/about"
import Skills from "../components/home/skills"
import Work from "../components/home/work"
import Contact from "../components/home/contact"

const IndexPage = () => {
    const navRefs = [ useRef(null), useRef(null), useRef(null) ]

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Nav refs={navRefs} />
            <Header />
            <section ref={navRefs[0]} id="about">
                <About />
                <Skills />
            </section>
            <div ref={navRefs[1]} id="work">
                <Work />
            </div>
            <div ref={navRefs[2]} id="contact">
                <Contact />
            </div>
        </Layout>
    )
}

export default IndexPage
