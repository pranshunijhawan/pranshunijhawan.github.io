import styled from "styled-components";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { percentageBar } from "../../types/keyframes";

export const SkillContent = styled.div`
    margin-top: var(--mb-2);
    font-size: var(--h3-font-size);
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);

    @media screen and (max-width: 349px) {
        font-size: var(--normal-font-size);
    }
`

export const SkillBar = styled.div`
    height: 5px;
    border-radius: 0.25rem;
    background-color: var(--first-color-lighter);
    width: 100%;
`

export const SkillsContainer = styled.div<{
    isOpen: boolean
  }>`
    row-gap: 1.5rem;
    padding-left: 2.7rem;
    margin-bottom: var(--mb-1-5);
    display: ${({ isOpen }) => isOpen ? '': 'none' };
    overflow: ${({ isOpen }) => isOpen ? '': 'hidden' };
    transition: max-height 2s ease-out;
`

export const DownIcon = styled(AiOutlineArrowDown)<{
    isOpen: boolean
  }>`
    font-size: 2rem;
    color: var(--first-color);
    margin-left: auto;
    transition: 0.4s;
    transform: ${({ isOpen }) => isOpen ? 'rotate(-180deg);': '' };
`

export const SkillsHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--mb-1-5);
    margin-top: var(--mb-1-5);
    cursor: pointer;
`

export const SkillCategory = styled.h1<{
    isOpen: boolean;
}>`
    margin-top: 0.5rem;
    font-size: var(--h3-font-size);
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
    transition: 0.2s;
    color: ${({ isOpen }) => isOpen ? 'var(--first-color)' : 'var(--title-color)' };
    
    @media screen and (max-width: 349px) {
        font-size: var(--normal-font-size);
    }
`

export const SkillName = styled.h3`
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
`

export const SkillPerentage = styled.h3`
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
`;

export const SkillPercentageBar = styled.span<{
    width: number;
  }>`
    height: 5px;
    border-radius: 0.25rem;
    width: ${({ width }) => width }%;
    display: block;
    background-color: var(--first-color);
    animation: ${({ width }) => percentageBar(width) } 3s normal forwards;
`