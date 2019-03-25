import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

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
            <div className={`hamburger hamburger--elastic ${ isOpen ? `is-active` : `` }`}>
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        </HamburgerWrapper>
    )
}

Hamburger.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default Hamburger
