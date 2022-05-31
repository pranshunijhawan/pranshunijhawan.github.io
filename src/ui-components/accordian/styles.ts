import { AiOutlineArrowDown } from "react-icons/ai";
import styled, { css } from "styled-components";


export const AccordianContainer = styled.div`
    display: grid;
    row-gap: 0.75rem;
    padding: 1rem 1rem;
    background-color: var(--container-color);
    border-radius: 0.5rem;
    box-shadow: 0 12px 32px rgba(51, 51, 51, 0.1);
`

export const AccordianItem = styled.div<{
    isOpen: boolean;
}>`
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    background-color: var(--container-color);
    border-radius: 0.25rem;
    position: relative;
    transition: all 0.25s ease;
    background-color: var(--body-color);
    padding-top: var(--mb-1);
    padding-left: var(--mb-1);
    padding-bottom: ${({ isOpen }) => isOpen ? 'var(--mb-1-5)' : 'var(--mb-1)' };
    cursor: pointer;

    &::after {
        content: "";
        background-color: var(--first-color);
        width: 5px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.25rem 0 0 0.25rem;
    }
`

export const TitleStyle = css`
    font-weight: 400;
    margin-top: 0.15rem;
    transition: 0.2s;
    font-size: var(--normal-font-size);
`

export const AccordianTitleContainer = styled.div`
    display: flex;
`

export const AccordianTitle = styled.h3<{
    isOpen: boolean;
}>`
    ${TitleStyle}
    color: ${({ isOpen }) => isOpen ? 'var(--first-color)' : 'var(--title-color)' };
    margin-bottom: 0;
    margin-left: var(--mb-0-5);
`

export const AccordianContent = styled.div`
    transition: all 0.5s ease;
    margin-top: var(--mb-1-5);
`

export const AccordianDescription = styled.p`
    font-size: var(--small-font-size);
    margin-top: 0;
`

export const AccordianDescriptionContent = styled.div`
    display: flex;
    margin-left: var(--mb-1);
    margin-top: var(--mb-1);
    margin-right: var(--mb-1-5);
`

export const DownIcon = styled(AiOutlineArrowDown)<{
    isOpen: boolean
  }>`
    font-size: 1.4rem;
    color: var(--first-color);
    margin-left: auto;
    margin-right: var(--mb-0-75);
    transition: 0.4s;
    transform: ${({ isOpen }) => isOpen ? 'rotate(-180deg);': '' };
`

export const DownArrowContainer = styled.div`
    margin-left: auto;
    margin-top: 0.2rem;
`