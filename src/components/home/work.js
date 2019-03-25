import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./project"
import Container from "../styles/container"
import SectionHeader from "../styles/sectionHeader"
import { colors } from "../styles/lib"

const WorkWrapper = styled.section`
    padding: 3.6rem 0 7rem 0;

    color: ${ colors.white };
    background: ${ colors.outerspace };

    h2 {
        margin: 1.3em 0 -1rem 0;
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
    return (
        <WorkWrapper>
            <Container>
                <SectionHeader>
                    <h2>Projects I've Worked On</h2>
                </SectionHeader>

                {projects.map((project, i) => (
                    <Project key={project.title} project={project} right={(i % 2) ? `right` : ``} />
                ))}
            </Container>
        </WorkWrapper>
    )
}

export default Skills
