import styled from "styled-components"
import { colors } from "./lib"

const SectionHeader = styled.header`
    font-size: 1.4rem;
    text-align: center;
    &:before {
        content: "";
        display: inline-block;
        width: 6.5rem;
        height: 0.25rem;
        margin: 0 0 1rem 0;
        border-radius: 4px;
        background-color: ${ colors.teal };
    }
`

export default SectionHeader
