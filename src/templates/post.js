import React, { Component } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Prism from "prismjs"

import SectionHeader from "../components/styles/sectionHeader"
import Container from "../components/styles/container"
import Layout from "../components/shared/layout"
import Comments from "../components/blog/comments"
import SEO from "../components/shared/seo"
import Nav from "../components/shared/nav"
import { prismTheme, colors, below } from "../components/styles/lib"

export const Post = styled.main`
    padding: 7.5rem 0 3rem 0;
    box-sizing: border-box;

    background: ${ colors.white };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    color: ${ colors.black };

    h1 {
        margin: 1.2em 0 1em 0;
        font-size: 1.6em;
    }

    .frontmatter {
        font-size: 0.65em;
    }

    .post-body {
        display: relative;
        border-radius: 4px;

        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
        background: ${ colors.white };

        img {
            border-radius: 4px 4px 0 0;
            max-width: 100%;
        }

        a {
            position: relative;
            box-sizing: content-box;
            ::after {
                content: "";
                width: 102%;
                margin-left: -1%;
                height: 0;
                bottom: -1px;
                position: absolute;
                background: rgba(61, 197, 173, 0.15);
                border-bottom: 2px solid ${ colors.teal };
                border-radius: 2px;
                left: 0;
                transition: 0.2s ease;
            }
            &:hover::after {
                height: 100%;
                width: 106%;
                margin-left: -3%;
            }
        }

        .post-text {
            padding: 2rem 3rem;

            .post-content {
                padding-bottom: 1.5rem;
            }

            .button {
                display: block;
                margin: 1rem auto;
                width: fit-content;
                line-height: 2.6rem;
                padding: 0 1.6rem;

                .svg-inline--fa.fa-w-14 {
                    margin-right: 0.4rem;
                }
            }

            ${ below.sm`
                padding: 2rem;
            ` }

            ${ below.xs`
                padding: 2rem 1.2rem;
            ` }
        }
    }

    ${ prismTheme }
`

class PostTemplate extends Component {
    componentDidMount () {
        Prism.highlightAll()
    }

    render () {
        const post = this.props.data.wordpressPost
        const seoTags = post.acf.seo_tags.map(obj => obj.tag)
        return (
            <Layout>
                <SEO
                    title={post.title}
                    keywords={[
                        `lucas lombardo`,
                        `blog`,
                        `web development`,
                        `javascript`,
                        ...seoTags
                    ]}
                    description={post.acf.excerpt}
                />
                <Nav />
                <Post>
                    <Container>
                        <SectionHeader>
                            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="frontmatter">
                                Published: {post.date}, Modified: {post.modified}
                            </p>
                        </SectionHeader>
                        <div className="post-body">
                            <div className="post-text">
                                <div
                                    className="post-content"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                                <Link to="/blog" className="button">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    Back to Blog
                                </Link>
                            </div>
                        </div>
                    </Container>
                    <Comments slug={post.slug} />
                </Post>
            </Layout>
        )
    }
}

export default PostTemplate

export const POST_TEMPLATE_QUERY = graphql`
  query POST_TEMPLATE_QUERY($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM Do, YYYY")
      modified(formatString: "MMMM Do, YYYY")
      acf {
        excerpt
        seo_tags {
          tag
        }
      }
    }
  }
`
