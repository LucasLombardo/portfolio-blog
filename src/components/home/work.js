import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Container from "../styles/container"
import Project from "./project"
import SectionHeader from "../styles/sectionHeader"
import { colors } from "../styles/lib"

const WorkWrapper = styled.section`
    padding: 3.6rem 0 7rem 0;

    color: ${ colors.white };
    background: ${ colors.outerspace };

    h2 {
        margin: 1.3em 0 -1rem 0;
    }
    .view-more {
        margin: 6em auto 0 auto;
        display: block;
        font-size: 0.7em;
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
    const { displayed } = data.wordpressPage.acf.projects

    const [ projectCount, setProjectCount ] = useState(displayed)

    return (
        <WorkWrapper id="work">
            <Container>
                <SectionHeader>
                    <h2>Projects I've Worked On</h2>
                </SectionHeader>
                {projects.slice(0, projectCount).map((project, i) => (
                    <Project key={project.title} project={project} right={(i % 2) ? `right` : ``} />
                ))}

                {projectCount < projects.length && (
                    <button
                        className="button primary view-more"
                        onClick={() => setProjectCount(projectCount + 2)}
                    >
                    View More Projects
                    </button>
                )}
            </Container>
        </WorkWrapper>
    )
}

export default Skills
