import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/shared/layout'
import Nav from '../components/shared/nav'
import Container from '../components/styles/container'
import SEO from '../components/shared/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Prism from 'prismjs'
import { prismTheme, colors } from "../components/styles/lib"
import SectionHeader from '../components/styles/sectionHeader'

export const Post = styled.main`
    padding: 7.5rem 0 3rem 0;
    background: ${ colors.white };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    box-sizing: border-box;
    color: ${ colors.black };
    h1 {
        font-size: 1.6em;
        margin: 1.2em 0 1em 0;
    }
    .frontmatter {
        font-size: 0.65em;
    }
    .post-body {
        background: ${ colors.white };
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
        display: relative;
        img {
            width: 100%;
            border-radius: 4px 4px 0 0;
        }
        .post-text {
            padding: 2rem 3rem;
            .post-content {
                padding-bottom: 1.5rem;
            }
            .button {
                display: block;
                width: fit-content;
                margin: 1rem auto;
                line-height: 2.6rem;
                padding: 0 1.6rem;
                .svg-inline--fa.fa-w-14 {
                    margin-right: 0.4rem;
                }
            }
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
      date(formatString: "MMMM DDDo, YYYY")
      modified(formatString: "MMMM DDDo, YYYY")
      acf {
        excerpt
        seo_tags {
          tag
        }
      }
    }
  }
`
