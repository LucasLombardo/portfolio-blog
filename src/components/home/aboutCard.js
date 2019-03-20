import React from "react"
import styled from "styled-components"

const ScAboutCard = styled.div`
    background: #fff;
    margin-top: 3rem;
    display: flex;
    border-radius: 4px;
    align-items: center;
    text-align: left;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
    min-width: 250px;

    .image-wrapper {
        height: 400px;
        flex-basis: 400px;
        position: relative;
        overflow: hidden;
        transition: 0.2s;
        border-radius: 4px 0 0 4px;
    }

    .content {
        padding: 0.5rem 3rem;
        flex: 1 1 0;

        h3 {
            font-size: 1.1rem;
        }
        p {
            font-size: 0.9rem;
            line-height: 1.5rem;
        }
        .button {
            margin-top: 2.5rem;
            margin-right: 1rem;
        }
    }

    &.right {
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
        .content {
            h3 {
                font-size: 0.95rem;
            }
        }
    }
    @media screen and (max-width: 820px) {
        /* Image breaks into seperate row */
        flex-direction: column;
        &.right {
            flex-direction: column;
            .image-wrapper {
                border-radius: 4px 4px 0 0;
            }
        }
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
    }
    @media screen and (max-width: 620px) {
        .image-wrapper {
            flex-basis: 250px;
        }
        .button {
            margin: 2rem 0.4rem 1rem 0.4rem;
            line-height: 2.6rem;
            font-size: 0.7rem;
            padding: 0 1.2rem;
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
        <ScAboutCard className={right ? `right` : `left`}>
            <div className="image-wrapper">
                <img src={image} />
            </div>
            <div className="content">
                {children}
            </div>
        </ScAboutCard>
    )
}

export default AboutCard
