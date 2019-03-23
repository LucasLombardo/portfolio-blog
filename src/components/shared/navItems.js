import React, { useState } from "react"
import { Link } from "gatsby"
import NavItemsWrapper from "../styles/navItemsWrapper"
import Hamburger from './hamburger'
import PropTypes from "prop-types"

const NavItems = ({ activeSection, scrollToRef, refs, isSticky }) => {
    const [ open, setOpen ] = useState(false)

    const toggleNav = () => {
        setOpen(!open)
    }

    const handleSidebarClick = e => {
        if (e.target.className === `sidebar`) {
            toggleNav()
        }
    }

    return (
        <NavItemsWrapper className={open ? `open` : `closed`}>
            <Link to="/" onClick={e => refs ? scrollToRef(e) : ``}>Lucas Lombardo</Link>
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
