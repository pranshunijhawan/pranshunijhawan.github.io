import styled, { css } from "styled-components";
import { VscBracketDot } from 'react-icons/vsc';
import { FaServer } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { AiFillCloud } from 'react-icons/ai'
import { SiDatabricks } from 'react-icons/si'
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

export const SkillHeaderIconBaseCSS = css`
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
`

export const FrontEndIcon = styled(VscBracketDot)`
    ${SkillHeaderIconBaseCSS}
`

export const BackEndIcon = styled(FaServer)`
    ${SkillHeaderIconBaseCSS}
`

export const DatabaseIcon = styled(FaDatabase)`
    ${SkillHeaderIconBaseCSS}
`

export const CloudIcon = styled(AiFillCloud)`
    ${SkillHeaderIconBaseCSS}
`

export const DataEngineeringIcon = styled(SiDatabricks)`
    ${SkillHeaderIconBaseCSS}
`