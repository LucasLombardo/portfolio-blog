import React from "react"
import styled from "styled-components"
import Container from "../styles/container"
import { colors } from "../styles/lib"
import SectionHeader from "../styles/sectionHeader"
import SkillSlider from "./skillSlider"

const SkillsWrapper = styled.div`
    background: ${ colors.white };
    overflow: auto;
    padding: 3.2em 0 5em 0;
    p {
        text-align: center;
        margin: 1em 0 2em 0;
        font-size: 1.1em;
    }
`

const Skills = () => {
    return (
        <SkillsWrapper>
            <Container>
                <SectionHeader>
                    <h2>Skills</h2>
                </SectionHeader>
                <p>These are a few of the technologies I enjoy working with:</p>
                <div className="skillDivs">
                    <SkillSlider />
                </div>
            </Container>
        </SkillsWrapper>
    )
}

export default Skills
