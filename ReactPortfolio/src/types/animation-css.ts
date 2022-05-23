import { keyframes } from "styled-components";

export const moveChevron = keyframes`
    25% {
        opacity: 1;
    }
    33.3% {
        opacity: 1;
        transform: translateY(2.28rem);
    }
    66.6% {
        opacity: 1;
        transform: translateY(3.12rem);
    }
    100% {
        opacity: 0;
        transform: translateY(4.8rem) scale(0.5);
    }
`

export const percentageBar = (width: number) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${width}%;
    }
`

export const RevealIn = (leftToRight: boolean) => keyframes`
    0% {
        width: ${leftToRight ? '0' : '100%'};
    }
    100% {
        width: ${leftToRight ? '100%' : '0'};
    }
`

export const RevealOut = (leftToRight: boolean) => keyframes`
    0% {
        transform: ${leftToRight ? 'translateX(0)' : 'translateX(100%)'};
    }
    100% {
        transform: ${leftToRight ? 'translateX(100%)' : 'translateX(0)'};
    }
`

export const FadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`