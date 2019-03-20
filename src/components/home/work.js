import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./project"
import Container from "../styles/container"

const WorkWrapper = styled.section`
    padding: 6rem 0 8rem 0;
    color: #fff;
    background: #292f33;
    .project {
        display: flex;
        align-items: center;
        margin-top: 5rem;
        h3 {
            transition: 0.2s;
            letter-spacing: 0.15rem;
            &:hover {
                color: #3dc5ad;
            }
        }
        ul {
            padding: 0;
        }
        li {
            display: inline-block;
            transform: skew(-10deg);
            background: rgba(0, 0, 0, 0.15);
            margin-right: 0.4rem;
            span {
                margin: 0.3rem;
                font-size: 0.65rem;
                color: #3dc5ad;
                display: block;
                text-decoration: none;
                padding: 0 0.5rem;
            }
        }
        img {
            margin: 0 3rem 0 0;
            max-width: 500px;
            border-radius: 4px;
            transition: 0.2s;
            @media only screen and (max-width: 1200px) {
                max-width: 400px;
            }
            @media only screen and (max-width: 1024px) {
                max-width: 330px;
            }
            &:hover {
                filter: saturate(0.7);
                transform: rotate(-1.5deg);
            }
        }
        .project-info {
            .button {
                margin: 1rem 1rem 1rem 0;
                line-height: 2.6rem;
                padding: 0 1.6rem;
                &.secondary {
                    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
                }
            }
            .no-code {
                display: inline;
                opacity: 0.6;
                font-size: 0.75rem;
                font-style: italic;
            }
        }
        &.right {
            flex-direction: row-reverse;
            img {
                margin: 0 0 0 3rem;
                &:hover {
                    transform: rotate(1.5deg);
                }
            }
        }

        @media only screen and (max-width: 880px) {
            flex-wrap: wrap;
            justify-content: center;
            justify-items: center;
            max-width: 500px;
            margin: 6rem auto 0 auto;
            &:first-of-type {
                margin-top: 5rem;
            }
            h3 {
                margin-top: 1rem;
            }
            a > img {
                max-width: 100%;
                margin: 0 !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .button {
                margin: 1rem 0.4rem 1rem 0;
                line-height: 2.6rem;
                font-size: 0.6rem;
                padding: 0 1rem;
            }
        }
        @media only screen and (max-width: 350px) {
            .button {
                margin: 1rem 0;
                font-size: 0.5rem;
                padding: 0;
            }
        }
    }
`

const Skills = () => {
    const data = useStaticQuery(graphql`
    query PROJECTS_QUERY {
        wordpressPage(slug: {eq: "home"}) {
          title
          acf {
            projects {
              displayed
              list {
                title
                description
                techs {
                  tech
                }
                tags {
                  tag
                }
                urls {
                  link
                  repo
                  thumbnail
                }
              }
            }
          }
        }
      }
    `)
    const projects = data.wordpressPage.acf.projects.list
    console.log(projects)
    return (
        <WorkWrapper>
            <Container>
                <h2>Work</h2>
                {projects.map((project, i) => (
                    <Project key={project.title} project={project} right={(i % 2) ? `right` : ``} />
                ))}
            </Container>
        </WorkWrapper>
    )
}

export default Skills
