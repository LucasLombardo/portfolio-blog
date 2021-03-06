import styled, { css } from "styled-components"

import { below, colors, elevation } from "../styles/lib"

const MobileNavItems = css`
    /* closed nav sidebar styling */
    .hamburger.toggle {
        top: 0;
        right: 0;
        z-index: 5;

        display: block;
        margin: 1px 0.5em;
    }

    ul {
        display: none
    }

    /* open nav sidebar styling */
    &.open {
        .hamburger.toggle {
            position: fixed;
        }
        &.sticky {
            ul a {
                color: ${ colors.white };
            }
            .active {
                &::after {
                    border-bottom: 4px solid ${ colors.white };
                }
            }
        }
        .sidebar {
            /* overlays the part of page not covered with the links list */
            position: fixed;

            width: 100vw;
            height: 100vh;

            transition: 0.4s;
            background: rgba(0,0,0,0.3);
        }

        ul {
            /* list of links displayed */
            position: fixed;
            top: 20%;
            right: 20%;
            width: 60%;

            display: flex;
            box-sizing: border-box;
            border-radius: 6px;
            padding: 3em 0;
            flex-direction: column;
            justify-content: space-evenly;

            text-align: center;
            background: ${ colors.teal };
            box-shadow: ${ elevation[3] };
            transform: translateX(100%);
            animation: slideIn 0.2s forwards;

            li {
                font-size: 1.5em;
                margin: 0;
            }

            @media (min-height: 480px){
                justify-content: flex-start;
            }

            @keyframes slideIn {
                0% { transform: translateX(100%); }
                100% { transform: translateX(0); }
            }
            @keyframes slideOut {
                0% { transform: translateX(0); }
                100% { transform: translateX(100%); }
            }
        }
    }

`

const NavItemsWrapper = styled.div`
    /* general nav item styling */
    display: flex;
    justify-content: space-between;

    color: ${ colors.white };

    /* stylelint-disable no-descending-specificity */
    ul {
        display: flex;
        margin: 0;

        list-style: none;
    }

    a {
        position: relative;

        display: block;
        margin: 0 1em;
        margin-top: 8px;

        line-height: 2em;
        letter-spacing: 0.05em;
        font-size: 18px;
        cursor: pointer;
        transition: 0.15s;
        &.logo {
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 10px;
        }
        &:hover {
            opacity: 0.8;
        }
    }

    /* active section */
    .active {
        position: relative;

        &::after {
            position: absolute;
            left: 40%;
            bottom: 0;

            display: block;
            width: 20%;
            border-bottom: 4px solid ${ colors.charcoal };
            border-radius: 2px;

            content: "";
            animation: scaleborder 0.4s forwards;
        }

        /* animate underline when section becomes active */
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

    /* baseline styling for nav toggle button */
    .hamburger.toggle {
        display: none;
    }

    button {
        border: none;

        background: none;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    /* sticky styling */
    &.sticky {
        a {
            color: ${ colors.charcoal };
        }
        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
            background-color: ${ colors.charcoal };
        }
        .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
            background-color: ${ colors.charcoal };
        }
    }

    /* include mobile navItems styling */
    ${ below.md`${ MobileNavItems }` }
`

export default NavItemsWrapper
