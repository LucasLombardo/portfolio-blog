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
        width: 26px;
        height: 26px;
        margin: 0.5rem 1.2rem;
        transition: 0.2s;
        &:hover {
            color: #3dc5ad;
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
            href="https://github.com/lucaslombardo"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={[`fab`, `github`]} />
        </a>

        <a
            href="https://codepen.io/LucasLombardo/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={[`fab`, `codepen`]} />
        </a>

        <a
            href="https://www.linkedin.com/in/lombardol/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={[`fab`, `linkedin`]} />
        </a>

        <div className="email">
            <a
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
