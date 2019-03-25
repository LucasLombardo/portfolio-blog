import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"

import { colors } from "../styles/lib"

const ScAboutCard = styled.article`
    display: flex;
    min-width: 250px;
    margin-top: 3rem;
    border-radius: 4px;

    align-items: center;
    background: ${ colors.white };
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
    text-align: left;

    .image-wrapper {
        position: relative;

        height: 400px;
        flex-basis: 400px;
        border-radius: 4px 0 0 4px;

        overflow: hidden;
        transition: 0.2s;
    }

    .content {
        padding: 0.5rem 3rem;
        flex: 1 1 0;

        h3 {
            font-size: 1.1rem;
        }

        p {
            line-height: 1.5rem;
            font-size: 0.9rem;
        }

        .button {
            margin-top: 2.5rem;
            margin-right: 1rem;
        }
    }

    &.right {
        /* image on right side */
        flex-direction: row-reverse;

        .image-wrapper {
            border-radius: 0 4px 4px 0;
        }
    }

    @media screen and (max-width: 1160px) {
        .image-wrapper {
            flex-basis: 330px;
        }
    }

    @media screen and (max-width: 1080px) {
        .image-wrapper {
            flex-basis: 230px;
        }

        .content h3 {
            font-size: 0.95rem;
        }
    }
    @media screen and (max-width: 820px) {
        /* Image breaks into seperate row */
        flex-direction: column;

        .image-wrapper {
            width: 100%;
            flex-basis: 320px;
            border-radius: 4px 4px 0 0;
            img {
                width: 100%;
                position: absolute;
                top: -50%;
            }
        }

        .content {
            padding: 3.6rem 3rem;
        }

        &.right {
            flex-direction: column;

            .image-wrapper {
                border-radius: 4px 4px 0 0;
            }
        }
    }

    @media screen and (max-width: 620px) {
        .image-wrapper {
            flex-basis: 250px;
        }

        .button {
            margin: 2rem 0.4rem 1rem 0.4rem;
            padding: 0 1.2rem;
            line-height: 2.6rem;
            font-size: 0.7rem;
        }
    }

    @media screen and (max-width: 440px) {
        .image-wrapper {
            flex-basis: 180px;
        }

        .content .button {
            margin: 0.2em;
        }
    }

    @media screen and (max-width: 320px) {
        .image-wrapper {
            flex-basis: 140px;
        }
    }
`

const AboutCard = ({ image, children, right }) => {
    return (
        <ScrollAnimation
            animateIn={right ? `rotate-in-right` : `rotate-in-left`}
            animateOnce={true}
            duration={0.8}
        >
            <ScAboutCard className={right ? `right` : `left`}>
                <div className="image-wrapper">
                    <img src={image} />
                </div>
                <div className="content">
                    {children}
                </div>
            </ScAboutCard>
        </ScrollAnimation>
    )
}

export default AboutCard
