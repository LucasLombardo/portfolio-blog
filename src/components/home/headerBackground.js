import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

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
        background-color: rgba(80, 80, 80, 1);

        /* fade overlay opacity out on load to give time for image loading */
        animation-name: fade-out;
        animation-delay: 0.7s;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        @keyframes fade-out {
            0% {
                background-color: rgba(80, 80, 80, 1);
            }
            100% {
                background-color: rgba(80, 80, 80, 0.1);
            }
        }
    }
`

const HeaderBackground = ({ children }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "zion.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
            <Background Tag="div"
                fluid={imageData}
            >
                <div className="overlay">
                    {children}
                </div>
            </Background>
        )
    }
    }
    />
)

HeaderBackground.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HeaderBackground
