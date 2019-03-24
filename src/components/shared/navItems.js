import React, { useState } from "react"
import { Link } from "gatsby"
import NavItemsWrapper from "../styles/navItemsWrapper"
import Hamburger from './hamburger'
import PropTypes from "prop-types"

const NavItems = ({ activeSection, refs, isSticky }) => {
    const [ open, setOpen ] = useState(false)

    const toggleNav = () => {
        setOpen(!open)
    }

    const handleSidebarClick = e => {
        if (e.target.className === `sidebar`) {
            toggleNav()
        }
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
        // close nav if open
        if (open) toggleNav()
    }

    const openClass = open ? `open` : ``
    const stickyClass = isSticky ? `sticky` : ``

    return (
        <NavItemsWrapper className={`${ openClass } ${ stickyClass }`}>
            <Link to="/" onClick={e => refs ? scrollToRef(e) : ``} className="logo">
                Lucas Lombardo
            </Link>
            <div className="sidebar" onClick={handleSidebarClick} >
                <button onClick={toggleNav} className="hamburger toggle">
                    <Hamburger isOpen={open} />
                </button>
                <ul>
                    <li className={activeSection === `about` ? `active` : ``}>
                        <Link to="/#about" onClick={e => refs ? scrollToRef(e, refs[0]) : ``}>
                                About
                        </Link>
                    </li>
                    <li className={activeSection === `work` ? `active` : ``}>
                        <Link to="/#work" onClick={e => refs ? scrollToRef(e, refs[1]) : ``}>
                                Work
                        </Link>
                    </li>
                    <li className={activeSection === `blog` ? `active` : ``}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={activeSection === `contact` ? `active` : ``}>
                        <Link to="/#contact" onClick={e => refs ? scrollToRef(e, refs[2]) : ``}>
                                Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </NavItemsWrapper>
    )
}

NavItems.propTypes = {
    activeSection: PropTypes.string.isRequired
}

export default NavItems
