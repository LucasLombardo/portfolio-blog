import React, { useState } from "react"
import NavItemsWrapper from "../styles/navItemsWrapper"
import Hamburger from './hamburger'
import PropTypes from "prop-types"

const NavItems = ({ activeSection }) => {
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
            <a>Lucas Lombardo</a>
            <div className="sidebar" onClick={handleSidebarClick} >
                <button onClick={toggleNav} className="hamburger toggle">
                    <Hamburger isOpen={open} />
                </button>
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
        </NavItemsWrapper>
    )
}

NavItems.propTypes = {
    activeSection: PropTypes.string.isRequired
}

export default NavItems
