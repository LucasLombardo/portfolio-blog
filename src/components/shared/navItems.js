import React, { useState } from "react"
import styled from "styled-components"
import { below, colors } from "../styles/lib"
// import PropTypes from "prop-types"

const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    /* padding: 0.5em 0; */
    /* margin: 0; */
    a {
        margin: 0 1em;
        line-height: 2em;
        letter-spacing: 0.05em;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: 0.15s;
        position: relative;
        display: block;
        &:hover {
            transform: translateY(-2px);
            opacity: 0.8;
        }
    }
    ul {
        display: flex;
        margin: 0;
        list-style: none;
    }
    .active {
        position: relative;

        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            width: 20%;
            left: 40%;
            border-bottom: 4px solid #fff;
            border-radius: 2px;
            animation: scaleborder 0.4s forwards;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        @keyframes scaleborder {
            0% {
                width: 40%;
                left: 30%;
            }
            100% {
                width: 20%;
                left: 40%;
            }
        }
    }
    .hamburger.toggle {
        display: none;
    }

    ${ below.sm`
        .hamburger.toggle {
            display: block;
            z-index: 5;
            top: 0;
            right: 0;
            margin: 1em;
        }
        ul {
            display: none
        }
        &.open {
            .hamburger.toggle {
                position: fixed;
            }
            .sidebar {
                transition: 0.5s;
                width: 100vw;
                height: 100vh;
                background: rgba(0,0,0,0.3);
                position: fixed;
            }
            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                position: fixed;
                box-sizing: border-box;
                text-align: center;
                top: 0;
                right: 0;
                height: 100vh;
                background ${ colors.teal };
                padding: 3em 4em;
                transform: translateX(100%);
                animation: slideIn 0.2s forwards;

                @keyframes slideIn {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            }
        }
    ` }
`

const NavItems = ({ activeSection, isSticky }) => {
    const [ open, setOpen ] = useState(false)

    return (
        <ItemsWrapper className={open ? `open` : `closed`}>
            <a>Lucas Lombardo</a>
            <div className="sidebar" onClick={() => console.log(`click`)} >
                <button onClick={() => setOpen(!open)} className="hamburger toggle">X</button>
                <ul>
                    <li className={activeSection === `about` ? `active` : ``}>
                        <a>About</a>
                    </li>
                    <li className={activeSection === `work` ? `active` : ``}>
                        <a>Work</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li className={activeSection === `contact` ? `active` : ``}>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </ItemsWrapper>
    )
}

export default NavItems
