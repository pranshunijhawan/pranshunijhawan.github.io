import styled, { css } from "styled-components";
import { buttonIcon, container, grid, scaleInElement, slideInFromTop } from "../../types/common-css";
import { IoMdContact } from 'react-icons/io';

const HomeCSS = css`
    ${container}
    ${grid}
    gap: 1rem;

    @media screen and (min-width: 768px) {
        .home__container {
          row-gap: 5rem;
        }
    }
`

export const HomeContainer = styled.div`
    ${HomeCSS}
`

export const HomeContent = styled.div`
    column-gap: 2rem;
    grid-column: 1/3;

    @media screen and (max-width: 349px) {
        grid-template-columns: 0.25fr 3fr;
    }
`

export const Name = styled.div`
    color: var(--first-color);
    font-size: var(--big-font-size);
    font-weight: var(--font-semi-bold);
`

export const Designation = styled.div`
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
`

export const HomeIcon = styled(IoMdContact)`
    ${buttonIcon}
`

export const Headline = styled.p`
    margin-bottom: var(--mb-2)
`

export const ToggleOutline = styled.div`
    display: flex;
    width: 100%;
    margin-top: -1.5rem;
    margin-bottom: var(--mb-1);
`

export const ToggleContainer = styled.div`
    ${slideInFromTop}
    margin-left: auto;
    background-color: var(--body-color);
    padding: 0.5rem 0.4rem 0.5rem 0.4rem;
    border-style: solid;
    border-color: var(--first-color);
    border-width: 0.2rem;
    border-radius: 2rem;
    width: 4.5rem;
    height: 2.5rem;
    margin-right: var(--mb-1-5);
    cursor: pointer;
`

export const ToggleButtonOutlineContainer = styled.div`
    ${scaleInElement}
    animation-delay: 0.85s;
`

export const ToggleButtonContainer = styled.div<{
    isDarkMode: boolean
}>`
    transform: ${({ isDarkMode }) => isDarkMode ? '' : 'translateX(1.8rem)' };
    padding-top: 0.19rem;
    padding-left: 0.27rem;
    border-radius: 2rem;
    background-color: var(--container-color);
    transition: 0.5s;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    margin-top: -0.2rem;
`