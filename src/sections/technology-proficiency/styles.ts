import styled from "styled-components";
import { container, grid } from "../../types/common-css";


export const SkillsContainer = styled.div`
    ${container}
    ${grid}
    row-gap: 0;

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`