import { keyframes } from "styled-components";

export const percentageBar = (width: number) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${width}%;
    }
`

export const textFocusIn = keyframes`
    0% {
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
`

export const textFocusOut = keyframes`
    0% {
        filter: blur(0.01);
    }
    100% {
        filter: blur(12px) opacity(0%);
    }
`

export const fadeInBottom = keyframes`
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export const fadeOutTop = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-50px);
        opacity: 0;
    }
`