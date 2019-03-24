import React from "react"
import styled from "styled-components"
import SEO from "../components/shared/seo"
import Layout from "../components/shared/layout"
import Nav from "../components/shared/nav"
import SectionHeader from "../components/styles/sectionHeader"
import { colors } from "../components/styles/lib"

const BlogWrapper = styled.main`
    padding-top: 68px;
    padding-bottom: 3rem;
    text-align: center;
    background: ${ colors.white };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
`

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="Blog" keywords={[`lucas lombardo`, `blog`,
                `react`, `web development`, `javascript`, `jamstack`,
                `gatsby`, `developer`, `boston`, `coding`]}
            />
            <Nav />
            <BlogWrapper>
                <SectionHeader>
                    <h2>Blog</h2>
                </SectionHeader>
            </BlogWrapper>
        </Layout>
    )
}

export default BlogPage
