import React from "react"
import styled from "styled-components"

const SkillsWrapper = styled.div`
    background: #fff;
    overflow: auto;
`

const Skills = () => {
    return (
        <SkillsWrapper>
            <h2>I have cool skills</h2>
            <h4>Proficient</h4>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>HTML5</li>
            </ul>
            <h4>Knowledgeable</h4>
            <ul>
                <li>Ruby on Rails</li>
                <li>Bootstrap</li>
                <li>TypeScript</li>
                <li>jQuery</li>
            </ul>
        </SkillsWrapper>
    )
}

export default Skills
