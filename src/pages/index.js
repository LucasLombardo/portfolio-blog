import React, { useRef } from "react"
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
        <>
            <SEO title="Home" keywords={[`lucas lombardo`, `blog`,
                `react`, `web developer`, `javascript`, `jamstack`,
                `gatsby`, `boston`, `coding`]} />
            <Nav refs={navRefs} />
            <Header nextSectionRef={navRefs[0]} />
            <section ref={navRefs[0]} id="about">
                <About nextSectionRef={navRefs[1]} />
                <Skills />
            </section>
            <div ref={navRefs[1]} id="work">
                <Work />
            </div>
            <div ref={navRefs[2]} id="contact">
                <Contact />
            </div>
        </>
    )
}

export default IndexPage
