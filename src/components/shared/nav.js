import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colors } from "../styles/lib"
import NavItems from "./navItems"

const NavWrapper = styled.nav`
    position: absolute;
    z-index: 100;

    width: 100%;
    height: 44px;

    &.sticky {
        position: fixed;
        background: ${ colors.teal };
    }
`

const Nav = ({ refs }) => {
    const [sticky, setSticky] = useState(false)
    const [activeSection, setActiveSection] = useState(`header`)

    useEffect(() => {
        if (refs) {
            // run handlescroll on update and scroll, remove scroll listener on unmount
            handleScroll()
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
            // rerender if sticky or activeSection changes
        } else {
            // if not on home page, set active to blog and nav to sticky
            setActiveSection(`blog`)
            setSticky(true)
        }
    }, [sticky, activeSection])

    const handleScroll = () => {
        const yOffset = window.pageYOffset
        // get top of all section refs
        const sectionTops = refs.map(r => r.current.offsetTop - 15)
        // set whether nav should be sticky
        setSticky(sectionTops[0] < yOffset + 4)
        // set active section
        const activeIndex = sectionTops.filter(n => n < yOffset).length
        setActiveSection([`header`, `about`, `work`, `contact`][activeIndex])
    }

    const scrollToRef = (e, ref) => {
        // scrolls to given ref if within pixel limit
        e.preventDefault()
        const currPos = window.pageYOffset
        // if no ref passed, set top to 0
        const top = ref ? ref.current.offsetTop : 0
        // if distance to scroll over 2400px, jump there rather than scrolling
        const behavior = Math.abs(top - currPos) > 2400 ? `auto` : `smooth`
        window.scrollTo({ top: top, behavior })
    }

    return (
        <NavWrapper className={sticky ? `sticky` : ``}>
            <NavItems
                activeSection={activeSection}
                scrollToRef={scrollToRef}
                isSticky={sticky}
                refs={refs}
            />
        </NavWrapper>
    )
}

Nav.propTypes = {
    refs: PropTypes.array,
}

export default Nav
