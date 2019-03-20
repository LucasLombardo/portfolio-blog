
import { css } from "styled-components"
import { below } from "./breakpoints"
import { colors } from "./colors"

export const typography = css`
    html {
        /* Font Styles */
        font-family: Helvetica, sans-serif;
        font-weight: 300;
        line-height: 1.65;
        color: ${ colors.black };
        input, select, textarea, button {
            font-family:inherit;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: "Raleway", Helvetica, sans-serif;
            font-weight: 800;
            line-height: 1.5;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        /* Font Sizing */
        font-size: 18px;

        ${ below.xl`
            font-size: 16px;
        ` }
        ${ below.md`
            font-size: 15px;
        ` }
        ${ below.sm`
            font-size: 14px;
        ` }
        ${ below.xs`
            font-size: 13px;
        ` }
    }
`
