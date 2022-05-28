import styled, { css } from "styled-components";


export const AccordianContainer = styled.div`
    display: grid;
    row-gap: 0.75rem;
    padding: 1rem 1rem;
    background-color: var(--container-color);
    border-radius: 0.5rem;
    box-shadow: 0 12px 32px rgba(51, 51, 51, 0.1);
`

export const AccordianItem = styled.div`
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    background-color: var(--container-color);
    border-radius: 0.25rem;
    position: relative;
    transition: all 0.25s ease;
    background-color: var(--body-color);
    padding: 1rem 1rem;
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

export const AccordianTitle = styled.h3<{
    isOpen: boolean;
}>`
    ${TitleStyle}
    color: ${({ isOpen }) => isOpen ? 'var(--first-color)' : 'var(--title-color)' };
`

export const PlusIcon = styled.span<{
    isOpen: boolean;
}>`
    display: inline-block;
    margin-right: var(--mb-0-5);
    transition: all 0.25s ease;
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0deg)' };
    color: ${({ isOpen }) => isOpen ? 'var(--first-color)' : 'var(--title-color)' };
`

export const AccordianContent = styled.div`
    transition: all 0.5s ease;
    margin-top: var(--mb-1-5);
`

export const AccordianDescription = styled.p`
    font-size: var(--small-font-size);
    padding-bottom: var(--mb-1);
    margin-top: 0;
`

export const AccordianDescriptionContent = styled.div`
    display: flex;
`