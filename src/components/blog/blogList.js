import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"
import Container from "../styles/container"

const ScBlogList = styled.section`
    article {
        background: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
        padding: 2rem 3rem;
        margin: 2rem 0;
        .date {
            color: #3dc5ad;
            font-weight: bold;
            margin-top: 0;
        }
        h2 {
            color: #3f3f3f;
        }
        p {
            color: #3f3f3f;
        }
        .button {
            margin-top: 1rem;
            line-height: 2.3rem;
            padding: 0 1.2rem;
        }
    }
`

const BlogList = () => {
    const data = useStaticQuery(graphql`
        query BLOG_LIST_QUERY {
            allWordpressPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                    id
                    slug
                    title
                    content
                    format
                    acf {
                        excerpt
                    }
                    date(formatString: "MMMM DDDo, YYYY")
                    }
                }
            }
        }
    `)
    const posts = data.allWordpressPost.edges

    return (
        <ScBlogList>
            <Container>
                {posts.map(({ node }) => (
                    <article key={node.id}>
                        <p className="date">{node.date}</p>
                        <h2>
                            <Link to={`/blog/${ node.slug }`}>{node.title}</Link>
                        </h2>
                        <p>{node.acf.excerpt}</p>
                        <Link className="button" to={`/blog/${ node.slug }`}>
                        Read More
                        </Link>
                    </article>
                ))}
            </Container>
        </ScBlogList>
    )
}

export default BlogList
