import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons"

import AboutCard from "./aboutCard"
import Container from "../styles/container"
import SectionHeader from "../styles/sectionHeader"
import { colors } from "../styles/lib"

const AboutWrapper = styled.div`
    padding: 3.8rem 0 6rem 0;

    background: ${ colors.black };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    color: ${ colors.black };
    text-align: center;

    h2 {
        font-size: 2.3rem;
    }

    .svg-inline--fa.fa-w-14,
    .svg-inline--fa.fa-w-16 {
        /* download and arrow button icons */
        margin-left: 0.4rem;
    }
`

const About = () => {
    const scrollToWork = () => {
        const top = document.querySelector(`#work`).offsetTop
        window.scrollTo({ top, behavior: `smooth` })
    }

    return (
        <AboutWrapper id="about">
            <SectionHeader>
                <h2>About Me</h2>
            </SectionHeader>
            <Container>
                <AboutCard
                    image="https://res.cloudinary.com/dov1pamgz/image/upload/v1547322364/sec1.jpg"
                    alt="Me sitting at the edge of the grand canyon"
                >
                    <h3>Self Driven developer with a passion for learning</h3>
                    <p>
                        I'm a software engineer mainly focused on full stack JavaScript development.
                        Some of my favorite things to work with are React, Styled Components, and
                        GatsbyJS. I'm currently excited about the JAMstack architecture and GraphQL.
                    </p>
                    <p>
                        When I’m not working towards making the web a better place, you can find me
                        hiking in the great outdoors, exercising at my local gym, or snowboarding at
                        one of the great mountains here in New England.
                    </p>
                </AboutCard>

                {/* <AboutCard
                    image="https://res.cloudinary.com/dov1pamgz/image/upload/v1547322364/sec2.jpg"
                    alt="Macbook with code on the screen"
                    right
                >
                    <h3>Currently seeking employment in the Boston Area</h3>
                    <p>
                        I'm currently looking for full time employment in the Greater Boston area.
                        My resume and some samples of my work are available below. If you have any
                        interest please don't hesitate to reach out.
                    </p>
                    <a
                        className="button primary"
                        // eslint-disable-next-line
                        href="https://res.cloudinary.com/dov1pamgz/image/upload/v1556806618/Resume_Lucas_Lombardo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                    <a
                        className="button secondary"
                        onClick={scrollToWork}
                    >
                        Portfolio
                        <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                </AboutCard> */}
            </Container>
        </AboutWrapper>
    )
}

export default About
