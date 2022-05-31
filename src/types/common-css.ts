import { css } from 'styled-components';
import { blockRevealInFromBottom, blockRevealOutToTop, fadeInBottom, fadeOutTop, scaleIn, scaleOut, slideInBackEnter, slideInBackExit, slideOutBackTop, textFocusIn, textFocusOut, trackingIn, trackingOut } from './keyframes';

export const bdGrid = css`
    display: grid;
    grid-template-columns: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`

export const section = css`
    padding: 2rem 0 2rem;
`

export const sectionTitle = css`
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-2);
    text-align: center;
    margin-top: var(--mb-2);
`
export const container = css`
    max-width: 980px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
`

export const grid = css`
    display: grid;
    gap: 1.5rem;
`

export const buttonIcon = css`
    font-size: 1rem;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
`

export const CenterScreen = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const focusIn = css`
    animation: ${textFocusIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const focusOut = css`
    animation: ${textFocusOut} 1s ease-out both;
`

export const slideIn = css`
    animation: ${fadeInBottom} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const slideOut = css`
    animation: ${fadeOutTop} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const showTitle = css`
    animation: ${trackingIn} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

export const hideTitle = css`
    animation: ${trackingOut} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

export const scaleInElement = css`
    animation: ${scaleIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const scaleOutElement = css`
    animation: ${scaleOut} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const slideInEnter = css`
    animation: ${slideInBackEnter} 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`

export const slideInExit = css`
    animation: ${slideInBackExit} 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
`

export const blockRevealFromBottomEnter = css`
    animation: ${blockRevealInFromBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const blockRevealToTopExit = css`
    animation: ${blockRevealOutToTop} 0.5s 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

export const slideOutBackExit = css`
    animation: ${slideOutBackTop} 0.6s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
`