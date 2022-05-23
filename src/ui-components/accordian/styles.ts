import styled from "styled-components";
import { container } from "../../types/common-css";


export const AccordianContainer = styled.div`
    ${container}
    display: grid;
    row-gap: 0.75rem;
    padding: 2rem 1rem;
    background-color: var(--container-color);
    border-radius: 0.5rem;
    box-shadow: 0 12px 32px rgba(51, 51, 51, 0.1);

    @media screen and (min-width: 576px) {
        .accordion__container {
          padding: 2.5rem;
          justify-self: center;
          border-radius: 0.75rem;
        }
    }
`

export const AccordianItem = styled.div`
    box-shadow: 0 2px 6px rgba(38, 38, 38, 0.1);
    background-color: var(--container-color);
    border-radius: 0.25rem;
    position: relative;
    transition: all 0.25s ease;
    background-color: var(--body-color);
    padding: 1rem 2rem;
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

export const AccordianHeader = styled.div`
    display: flex;
    column-gap: 0.5rem;
    padding: 1.25rem 1.25rem 1.25rem 1rem;
    cursor: pointer;

    @media screen and (min-width: 576px) {
        .accordion__header {
          padding: 1.5rem;
        }
    }
`

export const AccordianTitle = styled.h3`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: 400;
    margin-top: 0.15rem;
    transition: 0.2s;

    @media screen and (min-width: 576px) {
        padding-right: 3.5rem;
    }
`

export const AccordianContent = styled.div<{
    isOpen: boolean
  }>`
    margin-top: ${({ isOpen }) => isOpen ? '2rem': '0' };
    overflow: hidden;
    height: ${({ isOpen }) => isOpen ? 'max-content': '0' };
    transition: all 0.5s ease;
`

export const AccordianHeaderContainer = styled.div`
    display: flex;
    flex : flex-grow;
    flex-shrink flex-basis;
`

export const AccordianDescription = styled.p`
    font-size: var(--small-font-size);
    padding-left: var(--mb-1);
    padding-bottom: var(--mb-1);
`