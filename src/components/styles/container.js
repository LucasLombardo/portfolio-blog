import styled from "styled-components"
import { below } from "./lib"

const Container = styled.div`
    width: 1280px;
    max-width: 90%;
    margin: 0 auto;
    min-width: 260px;
    ${ below.xl`
        width: 1024px;
    ` }
`

export default Container
