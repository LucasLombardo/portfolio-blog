import { createGlobalStyle } from 'styled-components'
import { normalize, typography, keyframes } from './lib'

const GlobalStyles = createGlobalStyle`
    ${ normalize }
    ${ typography }
    ${ keyframes.rotateInUpRight }
    ${ keyframes.rotateInUpLeft }
`

export default GlobalStyles
