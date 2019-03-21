import React from "react"
import styled from "styled-components"
import Container from "../styles/container"
import { colors } from "../styles/lib"

const SkillsWrapper = styled.div`
    background: ${ colors.white };
    overflow: auto;
    padding: 3em 0;
    .skillDivs {
        display: flex;
        div {
            margin-right: 3em;
        }
    }
`

const Skills = () => {
    return (
        <SkillsWrapper>
            <Container>
                <h2>Skills</h2>
                <p>(still working on deciding what this section should look like)</p>
                <div className="skillDivs">
                    <div>
                        <h4>Proficient</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Knowledgeable</h4>
                        <ul>
                            <li>Ruby on Rails</li>
                            <li>Bootstrap</li>
                            <li>TypeScript</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </SkillsWrapper>
    )
}

export default Skills
