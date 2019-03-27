import React, { useEffect } from "react"
import styled from "styled-components"

import Container from "../styles/container"
import { colors } from "../styles/lib"

const CommentsWrapper = styled.div`
    margin-top: 2em;
    background: ${ colors.white };
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 2rem 3rem;
    a {
        color: ${ colors.teal };
    }
`

const Comments = ({ slug }) => {
    useEffect(() => {
        // eslint-disable-next-line
        const disqus_config = function () {
            this.page.url = `http://localhost:8000/blog/${ slug }`
            this.page.identifier = slug
        };

        (function () {
            let d = document; let s = d.createElement(`script`)
            s.src = `https://lucaslombardo.disqus.com/embed.js`
            s.setAttribute(`data-timestamp`, +new Date());
            (d.head || d.body).appendChild(s)
        })()
    })
    return (
        <Container>
            <CommentsWrapper>
                <div id="disqus_thread"></div>
            </CommentsWrapper>
        </Container>
    )
}

export default Comments
