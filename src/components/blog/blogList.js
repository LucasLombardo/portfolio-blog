import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Container from "../styles/container"
import { colors, below } from "../styles/lib"

const ListWrapper = styled.section`
    article {
        margin: 2rem 0;
        padding: 2rem 3rem;

        background: ${ colors.white };
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
        color: ${ colors.black };

        .date {
            margin-top: 0;
            color: ${ colors.teal };
            font-weight: bold;
        }

        .button {
            margin-top: 1rem;
            padding: 0 1.2rem;
            line-height: 2.3rem;
        }

        ${ below.sm`
            padding: 2rem;
        ` }
        ${ below.xs`
            padding: 2rem 1.2rem;
        ` }
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
        <ListWrapper>
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
        </ListWrapper>
    )
}

export default BlogList
