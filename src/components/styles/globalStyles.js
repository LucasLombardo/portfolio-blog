import { createGlobalStyle } from "styled-components"

import { normalize, typography, keyframes, buttons } from "./lib"

const GlobalStyles = createGlobalStyle`
    ${ normalize }
    ${ typography }
    ${ keyframes.rotateInUpRight }
    ${ keyframes.rotateInUpLeft }
    ${ buttons }

    .sr-only {
        position:absolute;
        left:-10000px;
        top:auto;
        width:1px;
        height:1px;
        overflow:hidden;
    }
`

export default GlobalStyles
