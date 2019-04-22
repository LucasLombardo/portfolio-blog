import React, { useEffect, useState } from "react"
import styled from "styled-components"

import NavItems from "./navItems"
import { colors, elevation } from "../styles/lib"

const NavWrapper = styled.nav`
    position: absolute;
    z-index: 100;

    width: 100%;
    height: 54px;
    transition: 0.5s;

    &.sticky-bar {
        position: fixed;
        margin-top: -1px;
        background: ${ colors.white };
        box-shadow: ${ elevation[1] };
    }
`

const Nav = ({ navPath }) => {
    const [sticky, setSticky] = useState(false)
    const [activeSection, setActiveSection] = useState(`header`)
    const [sections, setSections] = useState([])

    useEffect(() => {
        setSections([
            document.querySelector(`#about`),
            document.querySelector(`#work`),
            document.querySelector(`#contact`)
        ])
        if (navPath === `/`) {
            setSticky(false)
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
    }, [sticky, activeSection, navPath])

    const handleScroll = () => {
        if (navPath === `/`) {
            const sections = [
                document.querySelector(`#about`),
                document.querySelector(`#work`),
                document.querySelector(`#contact`),
            ]
            const yOffset = window.pageYOffset
            try {
                const sectionTops = sections.map(s => s.offsetTop - 55)
                // set whether nav should be sticky
                setSticky(sectionTops[0] < yOffset + 4)
                // set active section
                const activeIndex = sectionTops.filter(n => n < yOffset).length
                setActiveSection([`header`, `about`, `work`, `contact`][activeIndex])
            } catch {
                // first render of page change does not reflect the updated path,
                // this should only happen once and then correct path will be passed
            }
        }
    }

    return (
        <NavWrapper className={sticky ? `sticky-bar` : ``}>
            <NavItems
                activeSection={activeSection}
                isSticky={sticky}
                sections={sections}
                isHome={navPath === `/`}
            />
        </NavWrapper>
    )
}

export default Nav
