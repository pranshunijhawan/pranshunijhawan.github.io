import styled from "styled-components";
import { CenterScreen, container, grid } from "../../types/common-css";


export const ContactMeContainer = styled.div`
    ${container}
    ${grid}

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;

        grid-template-columns: repeat(4, 1fr);
    }
`

export const CopyRightContainer = styled.div`
    ${CenterScreen}
    margin-top: 5rem;
    align-items: center;
    margin-bottom: 4rem;
`

export const CopyRightMessage = styled.p`
    text-align: center;
    font-size: var(--smaller-font-size);
    margin-bottom: 0;
`

export const FlexContainer = styled.div`
    display: flex;
    text-align: center;
`

export const HeartIconContainer = styled.div`
    margin-top: -0.15rem;
`