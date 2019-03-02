import { createGlobalStyle } from 'styled-components'
import normalizeCss from './normalizeCss'

const GlobalStyles = createGlobalStyle`
    ${ normalizeCss }
`

export default GlobalStyles
