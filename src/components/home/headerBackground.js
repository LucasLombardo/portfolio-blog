import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"

import { below } from "../styles/lib"

const Background = styled.div`
    min-height: 100vh;

    .bg-image {
        object-fit: cover;
        width: 100%;
        /* override default gatsby image fluid position */
        position: fixed !important; /* stylelint-disable-line */
        z-index: -1;
        min-height: 100vh;
    }

    .overlay {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        width: 100%;

        background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.625),
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.625)
        );
    }

    ${ below.sm`
        min-height: 92vh;
        .overlay, .bg-image {
            min-height: 92vh;
        }
    ` }
`

const HeaderBackground = ({ children }) => {
    // get image data for background
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "zion.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1280) {
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
        <Background>
            <Img className="bg-image" fluid={data.placeholderImage.childImageSharp.fluid} />
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
