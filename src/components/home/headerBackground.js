import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useSpring, animated } from "react-spring"

const Background = styled(BackgroundImage)`
    height: 100vh;

    .overlay {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;

        background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.625),
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.625)
        );
    }
`

const HeaderBackground = ({ children }) => {
    // get image data for background
    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "zion.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    // define react spring animation
    const fadeBackgroundIn = useSpring({
        to: { backgroundColor: `rgba(80, 80, 80, 0.1)` },
        from: { backgroundColor: `rgba(80, 80, 80, 1)` },
        config: { duration: `1000` },
        delay: `500`
    })

    return (
        <Background Tag="div"
            fluid={data.desktop.childImageSharp.fluid}
        >
            <animated.div className="overlay" style={fadeBackgroundIn}>
                {children}
            </animated.div>
        </Background>
    )
}

HeaderBackground.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HeaderBackground
