import styled from "styled-components";
import { FadeInAnimation, RevealIn, RevealOut } from "../../types/animation-css";

export const BlockRevealContainer = styled.div<{
    color: string;
    duration: number;
    delay: number;
    fullScreen: boolean;
    leftToRight: boolean;
}>`
    position: ${({ fullScreen }) => fullScreen ? '': 'relative' };
    overflow: ${({ fullScreen }) => fullScreen ? '': 'hidden' };

    &::after {
        content: '';
        width: 0%;
        height: 100%;
        padding-bottom: 4px;
        position: absolute;
        top: 0;
        left: 0;
        background: ${({ color }) => color };
        animation: ${({ leftToRight }) => RevealIn(leftToRight) } ${({ duration }) => duration }s 1s forwards, ${({ leftToRight }) => RevealOut(leftToRight) } ${({ duration }) => duration }s 1s forwards;
        animation-delay: ${({ delay }) => delay }s;
    }
`

export const BlockRevealSpan = styled.span<{
    duration: number;
    delay: number;
}>`
    opacity: 0;
    animation: ${FadeInAnimation} ${({ duration }) => duration }s linear forwards;
    animation-delay: ${({ delay }) => delay }s;
`