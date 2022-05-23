import styled from "styled-components";
import { container, grid } from "../../types/common-css";
import { BsFillCalendar2DateFill } from 'react-icons/bs'

export const DescriptionContainer = styled.div<{
    isOpen: boolean
  }>`
    row-gap: 1.5rem;
    margin-bottom: var(--mb-2-5);
    display: ${({ isOpen }) => isOpen ? '': 'none' };
    overflow: ${({ isOpen }) => isOpen ? '': 'hidden' };
    transition: max-height 2s ease-out;
    margin-left: var(--mb-0-5);
`

export const ViewRandRContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

export const ViewRandR = styled.div`
    padding: 0;
    background-color: transparent;
    color: var(--first-color);
    margin-bottom: var(--mb-1);

    display: inline-flex;
    align-items: center;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);

    &:hover {
        background-color: transparent;
        color: var(--first-color-alt);
    }
`

export const TimelineContainer = styled.div`
    ${container}
    ${grid}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`

export const TimelineDataContainer = styled.div`
    display: flex;
    grid-template-columns: 1fr;
    column-gap: 0.5rem;

    @media screen and (max-width: 349px) {
        gap: 0.5rem;
    }
`

export const TimelineRounder = styled.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
    margin-top: 0.3rem;
`

export const TimelineRounderLine = styled.div`
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
`

export const TimelineTitle = styled.h3`
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
`

export const TimeLineSubTitle = styled.span`
    display: inline-block;
    font-size: var(--small-font-size);
`

export const TimeLineDate = styled.div`
    margin-top: var(--mb-0-5);
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    margin-bottom: var(--mb-0-5);
`

export const TimeLineDateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Calendar = styled(BsFillCalendar2DateFill)`
`

export const TimeLineDescription = styled.p`
    margin-bottom: var(--mb-1)
`