import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { colors } from "../styles/lib"

const NavWrapper = styled.nav`
    position: absolute;
    z-index: 100;
    width: 100%;
    &.sticky {
        background: ${ colors.teal };
        position: fixed;
    }
`

const Nav = ({ refs }) => {
    const [sticky, setSticky] = useState(false)
    const [activeSection, setActiveSection] = useState(`header`)

    useEffect(() => {
        // run handlescroll on update and scroll, remove scroll listener on unmount
        handleScroll()
        window.addEventListener(`scroll`, handleScroll)
        return () => window.removeEventListener(`scroll`, handleScroll)
        // rerender if sticky or activeSection changes
    }, [sticky, activeSection])

    const handleScroll = () => {
        const yOffset = window.pageYOffset
        // get top of all section refs
        const sectionTops = refs.map(r => r.current.offsetTop)
        // set whether nav should be sticky
        setSticky(sectionTops[0] < yOffset + 4)
        // set active section
        const activeIndex = sectionTops.filter(n => n < yOffset).length
        setActiveSection([`header`, `about`, `work`, `contact`][activeIndex])
    }

    return (
        <NavWrapper className={sticky ? `sticky` : ``}>
            <h2>{activeSection}</h2>
        </NavWrapper>
    )
}

export default Nav
