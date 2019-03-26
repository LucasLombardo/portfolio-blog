import { css } from "styled-components"

export const keyframes = {
    rotateInUpLeft: css`
        @-webkit-keyframes rotateInUpLeft {
            from {
                transform-origin: left bottom;
                transform: rotate3d(0, 0, 1, 3.5deg);
                opacity: 0;
            }

            to {
                transform-origin: left bottom;
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        @keyframes rotateInUpLeft {
            from {
                transform-origin: left bottom;
                transform: rotate3d(0, 0, 1, 3.5deg);
                opacity: 0;
            }

            to {
                transform-origin: left bottom;
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        .rotate-in-left {
            animation-name: rotateInUpLeft;
        }
    `,
    rotateInUpRight: css`
        @-webkit-keyframes rotateInUpRight {
            from {
                transform-origin: right bottom;
                transform: rotate3d(0, 0, 1, -3.5deg);
                opacity: 0;
            }
            to {
                transform-origin: right bottom;
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        @keyframes rotateInUpRight {
            from {
                transform-origin: right bottom;
                transform: rotate3d(0, 0, 1, -3.5deg);
                opacity: 0;
            }

            to {
                transform-origin: right bottom;
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        .rotate-in-right {
            animation-name: rotateInUpRight;
        }
    `
}
