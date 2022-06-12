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

export const blockRevealInFromBottom = keyframes`
    0% {
        transform: scaleY(0);
        transform-origin: 0% 100%;
        opacity: 1;
    }
    100% {
        transform: scaleY(1);
        transform-origin: 0% 100%;
        opacity: 1;
    }
`

export const blockRevealOutToTop = keyframes`
    0% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
        opacity: 1;
    }
    100% {
        transform: scaleY(0);
        transform-origin: 100% 0%;
        opacity: 1;
    }
`

export const slideOutBackTop = keyframes`
    0% {
        transform: scale(1) translateY(0);
        filter: blur(0);
        opacity: 1;
    }
    100% {
        transform: scale(0.5) translateY(-800px);
        filter: blur(50px);
        opacity: 0;
    }
`

export const slideInBottom = keyframes`
    0% {
        transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 100%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
`

export const slideInTop = keyframes`
    0% {
        transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 0%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
`