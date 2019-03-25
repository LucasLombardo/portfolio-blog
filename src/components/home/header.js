import React from "react"
import Svg from "../shared/svg"
import styled from "styled-components"
import HeaderBackground from "./headerBackground"
import { colors } from "../styles/lib/colors"
import { useSpring, animated } from "react-spring"

const Content = styled.div`
    position: relative;
    z-index: 2;

    padding: 2.8em 0.5em;

    background: ${ colors.teal };
    color: ${ colors.white };
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);

    h1 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
    }
`

const Chevron = styled.a`
    svg {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 50px;

        width: 50px;
        margin-left: -25px;
        margin-bottom: 20px;

        fill: ${ colors.white };
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            fill: ${ colors.teal };
        }
    }
`

const Header = ({ nextSectionRef }) => {
    const scaleIn = useSpring({
        to: { transform: `scaleY(1)` },
        from: { transform: `scaleY(1.2)` },
        delay: `100`,
    })

    const fadeIn = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 700 },
        delay: `100`,
    })

    const scrollToNextSection = () => {
        const top = nextSectionRef.current.offsetTop
        window.scrollTo({ top, behavior: `smooth` })
    }

    return (
        <header>
            <HeaderBackground>
                <animated.div style={scaleIn}>
                    <Content>
                        <animated.h1 style={fadeIn} >Lucas Lombardo</animated.h1>
                        <animated.p style={fadeIn} >Boston based web developer</animated.p>
                    </Content>
                </animated.div>
                <Chevron onClick={scrollToNextSection}>
                    <Svg name="chevron" />
                </Chevron>
            </HeaderBackground>
        </header>
    )
}

export default Header
