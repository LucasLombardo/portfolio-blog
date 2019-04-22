import React from "react"
import SEO from "../components/shared/seo"
import Header from '../components/home/header'
import About from "../components/home/about"
import Skills from "../components/home/skills"
import Work from "../components/home/work"
import Contact from "../components/home/contact"

const IndexPage = () => (
    <>
        <SEO title="Home" keywords={[`lucas lombardo`, `blog`,
            `react`, `web developer`, `javascript`, `jamstack`,
            `gatsby`, `boston`, `coding`]} />
        <Header />
        <About />
        <Skills />
        <Work />
        <Contact />
    </>
)

export default IndexPage
