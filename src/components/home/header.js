import React from "react"
import Svg from "../shared/svg"
import styled from "styled-components"
import HeaderBackground from "./headerBackground"
import { colors } from "../styles/lib/colors"

const Content = styled.div`
    position: relative;
    z-index: 2;

    padding: 2.8em 0.5em;

    background: ${ colors.teal };
    color: ${ colors.white };
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);

    /* remove margin between header and subheader */
    h1 {
        margin-bottom: 0;
    }
    p {
        margin-top: 0;
    }

    /* scale in and fade text in */
    animation-name: scale-in;
    animation-duration: 1.5s;
    h1, p {
        opacity: 0;
        animation-name: fade-in;
        animation-duration: 0.8s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes scale-in {
        0% {
            transform: scale(1.1) translate3d(0,0,0);
            opacity: 0.5;
        }
        30% {
            opacity: 1  translateZ(0);
        }
        100% {
            transform: scaleY(1);
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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

const Header = () => (
    <header>
        <HeaderBackground>
            <Content>
                <h1 className="fade-in">Lucas Lombardo</h1>
                <p className="fade-in">Boston based web developer</p>
            </Content>
            <Chevron>
                <Svg name="chevron" />
            </Chevron>
        </HeaderBackground>
    </header>
)

export default Header
