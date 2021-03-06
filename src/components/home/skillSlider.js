import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import { colors, elevation } from "../styles/lib"

const SliderWrapper = styled.div`
    .skill-icon {
        img {
            margin: 1.9em 0 0.4em 18%;
            width: 64%;
        }

        p {
            margin: 0 0 1.2em 0;
            font-size: 0.9em;
            text-align: center;
        }
    }
    .BrainhubCarousel__arrows {
        border: 3px solid ${ colors.teal };
        border-radius: 50%;
        background: rgba(0,0,0,0);

        span {
            border-color: ${ colors.teal };
        }

        &:hover {
            background: ${ colors.teal };

            span {
                border-color: ${ colors.white }
            }
        }
    }
    .BrainhubCarousel__trackContainer {
        margin: 0 2.1em;
        padding: 0 1.3em;
        border-radius: 4px;

        background: ${ colors.white };
        background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
        no-repeat center center fixed;
        background-size: cover;
        box-shadow: ${ elevation[0] };
    }
`

const SkillSlider = () => {
    const [skillsDisplayed, setSkillsDisplayed] = useState(8)

    useEffect(() => {
        handleResize()
        window.addEventListener(`resize`, handleResize)
        return () => window.removeEventListener(`resize`, handleResize)
    })

    const handleResize = () => {
        const width = window.innerWidth
        if (width > 850) {
            setSkillsDisplayed(8)
        } else if (width > 640) {
            setSkillsDisplayed(6)
        } else if (width > 540) {
            setSkillsDisplayed(5)
        } else {
            setSkillsDisplayed(4)
        }
    }

    return (
        <SliderWrapper>
            <Carousel
                slidesPerPage={skillsDisplayed}
                arrows={skillsDisplayed > 4}
                autoPlay={2700}
                infinite
            >
                <div className="skill-icon">
                    <img alt="Node JS Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-node.svg" />
                    <p>Node JS</p>
                </div>
                <div className="skill-icon">
                    <img alt="HTML5 Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-html.svg" />
                    <p>HTML5</p>
                </div>
                <div className="skill-icon">
                    <img alt="Sass Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-sass.svg" />
                    <p>Sass</p>
                </div>
                <div className="skill-icon">
                    <img alt="ReactJS" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-jsx.svg" />
                    <p>ReactJS</p>
                </div>
                <div className="skill-icon">
                    <img alt="CSS3 Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-css.svg" />
                    <p>CSS3</p>
                </div>
                <div className="skill-icon">
                    <img alt="Git Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-git.svg" />
                    <p>Git</p>
                </div>
                <div className="skill-icon">
                    <img alt="JavaScript Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-javascript.svg" />
                    <p>JavaScript</p>
                </div>
                <div className="skill-icon">
                    <img alt="Gatsby JS Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-gatsby.svg" />
                    <p>Gatsby JS</p>
                </div>
                <div className="skill-icon">
                    <img alt="Mongo DB Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-mongo.svg" />
                    <p>MongoDB</p>
                </div>
                <div className="skill-icon">
                    <img alt="Photoshop Logo" src="https://res.cloudinary.com/lucasl/image/upload/v1553618857/Dev%20Icons/icon-photoshop.svg" />
                    <p>Photoshop</p>
                </div>
            </Carousel>
        </SliderWrapper>
    )
}

export default SkillSlider
