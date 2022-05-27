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
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const textFocusOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
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

export const trackingIn = keyframes`
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
`

export const trackingOut = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
`

export const scaleIn = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

export const scaleOut = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 1;
    }
`

export const slideInBackEnter = keyframes`
    0% {
        transform: scale(2);
        filter: blur(4px);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        filter: blur(0px);
        opacity: 1;
    }
`

export const slideInBackExit = keyframes`
    0% {
        transform: scale(1);
        filter: blur(0px);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        filter: blur(4px);
        opacity: 0;
    }
`