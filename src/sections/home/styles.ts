import styled, { css } from "styled-components";
import { buttonIcon, CenterScreen, container, grid } from "../../types/common-css";
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
    margin-bottom: -2rem;
`

export const SubHomeContainer = styled.div`
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
    margin-bottom: var(--mb-0-75);
`

export const HomeIcon = styled(IoMdContact)`
    ${buttonIcon}
`

export const Headline = styled.p`
    margin-bottom: var(--mb-2)
`

export const LogoContainer = styled.div`
    ${CenterScreen}
    margin-top: 7rem;
    margin-bottom: var(--mb-3);
`

export const ChevronContainer = styled.div`
    ${CenterScreen}
    margin-top: 5rem;
    margin-bottom: -2rem;
    
    @media screen and (min-width: 660px) {
       margin-bottom: 2rem;
    }
`