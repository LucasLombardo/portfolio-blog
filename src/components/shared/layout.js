import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../styles/globalStyles"

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <header></header>
        <main>{children}</main>
        <footer></footer>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
