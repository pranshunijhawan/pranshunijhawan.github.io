import styled from "styled-components";
import { container, grid } from "../../types/common-css";


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
    margin-top: 5rem;
    align-items: center;
`

export const CopyRightMessage = styled.p`
    text-align: center;
    font-size: var(--smaller-font-size);
    margin-bottom: 0;
`