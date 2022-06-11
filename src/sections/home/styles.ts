import styled, { css } from "styled-components";
import { buttonIcon, container, grid } from "../../types/common-css";
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