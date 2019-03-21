import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../styles/globalStyles"
import Footer from "./footer"

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <header></header>
        <main>{children}</main>
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
