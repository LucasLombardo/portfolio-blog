import { css } from "styled-components"

export const buttons = css`
    .button, button {
        font-family: 'Raleway', Helvetica, sans-serif;
        font-weight: 800;
        font-size: 0.75rem;
        line-height: 3.075rem;
    }
    .button {
        display: inline-block;
        border-radius: 4px;
        border: 0;
        cursor: pointer;
        background: #3dc5ad;
        color: #fff;
        padding: 0 2.5rem;
        text-align: center;
        white-space: nowrap;
        text-transform: uppercase;
        letter-spacing: 0.025rem;
        transition: 0.2s;
    }
    .button:hover {
        background: #51cbb5;
    }
    .button.secondary {
        background: transparent;
        box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
        color: inherit;
    }
    .button.secondary:hover {
        background: rgba(143, 143, 143, 0.075);
    }
`
