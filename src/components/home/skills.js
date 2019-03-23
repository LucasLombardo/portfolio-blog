import React from "react"
import styled from "styled-components"
import Container from "../styles/container"
import { colors } from "../styles/lib"
import SectionHeader from "../styles/sectionHeader"
import SkillSlider from "./skillSlider"

const SkillsWrapper = styled.div`
    background: ${ colors.white };
    overflow: auto;
    padding: 3em 0;
    p {
        text-align: center;
        margin-bottom: 2em;
    }
    .skillDivs {
        height: 140px;
        border-top: 6px double ${ colors.teal };
        border-bottom: 6px double ${ colors.teal };
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
