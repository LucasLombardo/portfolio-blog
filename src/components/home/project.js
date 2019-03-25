import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
import { colors } from "../styles/lib"

const ProjectWrapper = styled.article`
    display: flex;
    margin-top: 5rem;
    align-items: center;

    h3 {
        display: inline-block;
        transition: 0.2s;
        letter-spacing: 0.15rem;

        &:hover {
            color: ${ colors.teal };
        }
    }

    /* Tech tags */
    ul {
        padding: 0;
    }

    li {
        display: inline-block;
        margin-right: 0.4rem;
        margin-bottom: 0.4rem;

        background: rgba(0, 0, 0, 0.15);

        span {
            display: block;
            margin: 0.3rem;
            padding: 0 0.5rem;

            color: ${ colors.teal };
            font-size: 0.8rem;
            text-decoration: none;
        }
    }

    /* Thumbnail */
    img {
        margin: 0 3rem 0 0;
        max-width: 500px;
        border-radius: 4px;

        transition: 0.2s;

        @media only screen and (max-width: 1200px) {
            max-width: 400px;
        }

        @media only screen and (max-width: 1024px) {
            max-width: 330px;
        }

        &:hover {
            transform: rotate(-1.5deg);
            filter: saturate(0.7);
        }
    }

    /* Text and links */
    .project-info {
        .button {
            margin: 1rem 1rem 1rem 0;
            padding: 0 1.6rem;
            line-height: 2.6rem;

            &.secondary {
                box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
            }
        }

        .no-code {
            /* disclaimer if no public repo available */
            display: inline;
            opacity: 0.6;
            font-size: 0.75rem;
            font-style: italic;
        }
    }

    /* Adjustments if image to be on right side */
    &.right {
        flex-direction: row-reverse;

        img {
            margin: 0 0 0 3rem;

            &:hover {
                transform: rotate(1.5deg);
            }
        }
    }

    @media only screen and (max-width: 880px) {
        margin: 6rem auto 0 auto;
        max-width: 500px;

        flex-wrap: wrap;
        justify-content: center;
        justify-items: center;

        &:first-of-type {
            margin-top: 5rem;
        }

        h3 {
            margin-top: 1rem;
        }

        a > .thumbnail {
            margin: 0;
            max-width: 100%;
        }
    }

    @media only screen and (max-width: 480px) {
        .button {
            margin: 1rem 0.4rem 1rem 0;
            padding: 0 1rem;
            line-height: 2.6rem;
            font-size: 0.6rem;
        }
    }

    @media only screen and (max-width: 350px) {
        .button {
            margin: 1rem 0;
            padding: 0;
            font-size: 0.5rem;
        }
    }
`

const Project = ({ project, right }) => {
    const { urls, title, description, techs } = project
    return (
        <ScrollAnimation
            animateIn={right ? `rotate-in-right` : `rotate-in-left`}
            animateOnce={true}
        >
            <ProjectWrapper className={right ? `project right` : `project`}>
                <a href={urls.link} target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail" src={urls.thumbnail} alt={title} />
                </a>
                <div className="project-info">
                    <a href={urls.link} target="_blank" rel="noopener noreferrer">
                        <h3>{title}</h3>
                    </a>
                    <ul className="tags">
                        {techs.map(({ tech }) => (
                            <li key={tech}>
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    <a
                        href={urls.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
                        Live Project
                    </a>
                    {urls.repo ? (
                        <a
                            href={urls.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button secondary"
                        >
                            Project Code
                        </a>
                    ) : (
                        <p className="no-code">Private Repo, code available on request</p>
                    )}
                </div>
            </ProjectWrapper>
        </ScrollAnimation>
    )
}

export default Project
