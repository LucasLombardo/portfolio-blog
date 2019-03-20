import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AboutCard from "./aboutCard"
import Container from "../styles/container"

const AboutWrapper = styled.div`
    background: #fff;
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    padding: 7rem 0 8rem 0;
    text-align: center;
    color: #3f3f3f;
    .about-header:before {
        content: '';
        display: inline-block;
        width: 6.5rem;
        height: 0.25rem;
        margin: 0 0 1.5rem 0;
        border-radius: 4px;
        background-color: #3dc5ad;
    }
    h2 {
        font-size: 2.3rem;
    }
    .svg-inline--fa.fa-w-14,
    .svg-inline--fa.fa-w-16 {
        margin-left: 0.4rem;
    }
`

const About = () => {
    return (
        <AboutWrapper>
            <h2>About</h2>
            <Container>
                <AboutCard image="https://res.cloudinary.com/dov1pamgz/image/upload/v1547322364/sec1.jpg">
                    <h3>Self Driven developer with a passion for building cool things</h3>
                    <p>
                    I'm a Junior developer mainly focused on full stack JavaScript development.
                    Some of my favorite things to work with are ReactJS, NodeJS, GraphQL, and
                    GatsbyJS. I'm currently working on improving my skills in ExpressJS
                    and TypeScript.
                    </p>
                    <p>
                    When I’m not working towards making the web a better place, you can find me
                    hiking in the great outdoors, exercising at my local gym, or snowboarding at
                    one of the great mountains here in New England.
                    </p>
                </AboutCard>

                <AboutCard image="https://res.cloudinary.com/dov1pamgz/image/upload/v1547322364/sec2.jpg" right>
                    <h3>Currently seeking employment in the Boston Area</h3>
                    <p>
                    I'm currently looking for full time employment in the Greater Boston area.
                    My resume and some samples of my work are available below. If you have any
                    interest please don't hesitate to reach out.
                    </p>
                    <p>
                    When I’m not working towards making the web a better place, you can find me
                    hiking in the great outdoors, exercising at my local gym, or snowboarding at
                    one of the great mountains here in New England.
                    </p>
                </AboutCard>
            </Container>
        </AboutWrapper>
    )
}

export default About
