import styled from "styled-components";
import { CenterScreen, slideInFromBottom } from "../../types/common-css";

export const HeaderContainer = styled.div<{
    show: boolean;
}>`
    ${CenterScreen}
    width: 100%;
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--body-color);
    z-index: var(--z-fixed);
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: ${({ show }) => show ? '1': '0' };
    transition: opacity 1s, visibility 1s;
`

export const HeaderLogoContainer = styled.div`
    align-items: center;
    margin-top: 0.75rem;
    cursor: pointer;
`

export const NavigationContainer = styled.div`
    ${slideInFromBottom}
    position: fixed;
    bottom: var(--mb-1);
    background-color: var(--body-color);
    padding: 0.5rem 0.4rem 0.5rem 0.4rem;
    border-style: solid;
    border-color: var(--first-color);
    border-width: 0.2rem;
    border-radius: 2rem;
    display: flex;
    z-index: 100;
`

export const NavigationItemContainer = styled.div<{
    toggle: boolean
}>`
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 2rem;
    background-color: var(--container-color);
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    transform: ${({ toggle }) => toggle ? 'scale(1.2)' : 'scale(1)' };
    transition: 0.5s;
    cursor: pointer;
`