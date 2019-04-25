import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { colors } from "../styles/lib"

library.add(fab)

const ScFooter = styled.footer`
    padding: 3rem 0;
    color: #bfbfbf;
    text-align: center;
    background: ${ colors.white };
    p {
        font-size: 0.65rem;
    }
    .svg-inline--fa.fa-w-16,
    .svg-inline--fa.fa-w-14 {
        margin: 0.2rem 0.85rem;
        width: 26px;
        height: 26px;
        padding: 4px;
        border: 2px solid rgba(0,0,0,0);
        border-radius: 50%;

        transition: 0.2s;

        &:hover {
            border: 2px dashed ${ colors.teal };
            color: ${ colors.teal };
        }
    }
    .email {
        display: inline;
        position: relative;
        div {
            position: absolute;
            left: -24px;
            top: 0;
            margin-top: 20px;
            input {
                width: 120px;
                box-sizing: border-box;
            }
            .button {
                line-height: 1.8rem;
                padding: 0;
                width: 120px;
                margin-top: 5px;
            }
        }
    }
`

const Footer = () => (
    <ScFooter>
        <a
            name="github"
            href="https://github.com/lucaslombardo"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={[`fab`, `github`]} />
        </a>

        <a
            name="codepen"
            href="https://codepen.io/LucasLombardo/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={[`fab`, `codepen`]} />
        </a>

        <a
            name="linked in"
            href="https://www.linkedin.com/in/lombardol/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={[`fab`, `linkedin`]} />
        </a>

        <div className="email">
            <a
                name="email"
                href={`mailto:lucasalombardo@gmail.com`}
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} Lucas Lombardo. All
          rights reserved.
        </p>
    </ScFooter>
)

export default Footer
