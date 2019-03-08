import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { hamburger } from "../styles/lib"

const HamburgerWrapper = styled.div`
    ${ hamburger }
    .hamburger {
        transform: scale(0.6);
        padding: 7px 0;
    }
`

const Hamburger = ({ isOpen }) => {
    return (
        <HamburgerWrapper>
            <div class={`hamburger hamburger--elastic ${ isOpen ? `is-active` : `` }`}>
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>
        </HamburgerWrapper>
    )
}

Hamburger.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default Hamburger
