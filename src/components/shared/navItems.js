import React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"

const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 0.5em 0;
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
`

const NavItems = ({ activeSection, isSticky }) => (
    <ItemsWrapper>
        <a>Lucas Lombardo</a>
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
    </ItemsWrapper>
)

export default NavItems
