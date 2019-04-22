import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../components/styles/globalStyles"
import Footer from "../components/shared/footer"
import Nav from "../components/shared/nav"

const Layout = ({ children, location }) => (
    <>
        <GlobalStyles />
        <header><Nav navPath={location.pathname} /></header>
        <main>{children}</main>
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
