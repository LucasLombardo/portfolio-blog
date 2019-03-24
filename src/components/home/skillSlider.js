import React from "react"
import styled from "styled-components"
import { colors, elevation } from "../styles/lib"
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const SliderWrapper = styled.div`
    .skill-icon {
        img {
            width: 64%;
            margin: 1.9em 0 0.4em 18%;
        }
        p {
            margin: 0 0 1.2em 0;
            font-size: 0.9em;
            text-align: center;
        }
    }
    .BrainhubCarousel__arrows {
        background: rgba(0,0,0,0);
        border: 3px solid ${ colors.teal };
        border-radius: 50%;
        span {
            border-color: ${ colors.teal };
        }
        &:hover {
            background: ${ colors.teal };
        }
    }
    .BrainhubCarousel__trackContainer {
        margin: 0 2.1em;
        padding: 0 1.3em;
        background: ${ colors.white };
        background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
        no-repeat center center fixed;
        background-size: cover;
        box-shadow: ${ elevation[0] };
        border-radius: 4px;
    }
    .BrainhubCarousel__track {
        /* margin-left: -9px !important; */
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
