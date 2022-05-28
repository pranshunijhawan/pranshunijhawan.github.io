import styled, { css } from "styled-components";
import { FaDatabase } from 'react-icons/fa'
import { SiDatabricks, SiGraphql, SiJavascript } from 'react-icons/si'
import { container, grid } from "../../types/common-css";
import { BsFillCloudFill } from "react-icons/bs";


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

export const SkillHeaderIconBaseCSS = css`
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
`

export const FrontEndIcon = styled(SiJavascript)`
    ${SkillHeaderIconBaseCSS}
`

export const BackEndIcon = styled(SiGraphql)`
    ${SkillHeaderIconBaseCSS}
`

export const DatabaseIcon = styled(FaDatabase)`
    ${SkillHeaderIconBaseCSS}
`

export const CloudIcon = styled(BsFillCloudFill)`
    ${SkillHeaderIconBaseCSS}
`

export const DataEngineeringIcon = styled(SiDatabricks)`
    ${SkillHeaderIconBaseCSS}
`