import React from "react"
import styled from "styled-components"
import { colors } from "../styles/lib"
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const SliderWrapper = styled.div`
    .skill-icon {
        img {
            width: 80%;
            margin: 1.9em 0 0.4em 10%;
        }
        p {
            margin: 0 0 1.2em 0;
            text-align: center;
        }
    }
    .BrainhubCarousel__arrows {
        background: rgba(0,0,0,0);
        border: 2px solid ${ colors.teal };
        border-radius: 50%;
        span {
            border-color: ${ colors.teal };
        }
        &:hover {
            background: ${ colors.teal };
        }
    }
`

const SkillSlider = () => (
    <SliderWrapper>
        <Carousel
            slidesPerPage={9}
            arrows
            infinite
        >
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-node.svg" />
                <p>Node JS</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-html.svg" />
                <p>HTML5</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-sass.svg" />
                <p>Sass</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-jsx.svg" />
                <p>ReactJS</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-css.svg" />
                <p>CSS3</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-git.svg" />
                <p>Git</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-javascript.svg" />
                <p>JavaScript</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-gatsby.svg" />
                <p>Gatsby JS</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-mongo.svg" />
                <p>MongoDB</p>
            </div>
            <div className="skill-icon">
                <img src="https://lucaslombardo.com/images/skills/icon-photoshop.svg" />
                <p>Photoshop</p>
            </div>
        </Carousel>
    </SliderWrapper>
)

export default SkillSlider
