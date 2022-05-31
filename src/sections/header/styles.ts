import styled from "styled-components";
import { CenterScreen } from "../../types/common-css";

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