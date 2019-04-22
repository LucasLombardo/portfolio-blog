import React from "react"
import styled from "styled-components"
import SEO from "../components/shared/seo"
import SectionHeader from "../components/styles/sectionHeader"
import { colors } from "../components/styles/lib"
import BlogList from "../components/blog/blogList"

const BlogWrapper = styled.main`
    padding-top: 7.5rem;
    padding-bottom: 3rem;
    text-align: center;
    background: ${ colors.white };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    h2 {
        margin: 1.2em 0 1.4em 0;
    }
`

const BlogPage = () => {
    return (
        <>
            <SEO title="Blog" keywords={[`lucas lombardo`, `blog`,
                `react`, `web development`, `javascript`, `jamstack`,
                `gatsby`, `developer`, `boston`, `coding`]}
            />
            <BlogWrapper>
                <SectionHeader>
                    <h2>Blog Posts</h2>
                </SectionHeader>
                <BlogList />
            </BlogWrapper>
        </>
    )
}

export default BlogPage
