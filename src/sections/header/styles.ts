import styled from "styled-components";
import { CenterScreen, grid } from "../../types/common-css";

export const HeaderContainer = styled.div<{
    show: boolean;
}>`
    ${CenterScreen}
    width: 100%;
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 1.5rem;
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
`

export const LogoText = styled.p`
    margin-left: -0.8rem;
    color: var(--title-color);
`

export const HamburgerMenu = styled.div<{
    isMenuOpen: boolean;
}>`
    position: relative;
    height: 30px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9999999999;
    cursor: pointer;
    margin-top: 1rem;

    &::before {
        position: absolute;
        content: "";
        height: 2px;
        width: 90%;
        background: var(--title-color);
        transition: 0.3s linear;
        
        transform: ${({ isMenuOpen }) => isMenuOpen ? 'rotate(45deg)': '' };
        top: ${({ isMenuOpen }) => isMenuOpen ? '5%': '' };
        background: ${({ isMenuOpen }) => isMenuOpen ? 'var(--title-color)': '' };
    }

    &::after {
        position: absolute;
        content: "";
        height: 2px;
        width: 90%;
        background: var(--title-color);
        top: 35%;
        transition: 0.3s linear;

        transform: ${({ isMenuOpen }) => isMenuOpen ? 'rotate(-45deg)': '' };
        top: ${({ isMenuOpen }) => isMenuOpen ? '5%': '' };
        background: ${({ isMenuOpen }) => isMenuOpen ? 'var(--title-color)': '' };
    }
`

export const MenuContainer = styled.div`
    position: absolute;
    margin-left: 100%;
    width: 100%;
    height: 100%;
    background: var(--first-color);
`

export const Navigation = styled.div<{
    isMenuOpen: boolean;
}>`
    position: relative;
    margin-left: ${({ isMenuOpen }) => isMenuOpen ? '0': '100%' };
    width: 100%;
    height: 100vh;
    background: var(--body-color);
    z-index: 1;
    display: flex;
    align-items: center;
    display: ${({ isMenuOpen }) => isMenuOpen ? '': 'none' };

    ul {
        margin-left: var(--mb-2-5);
        opacity: ${({ isMenuOpen }) => isMenuOpen ? '1': '0' };
      }
    ul li {
        margin-bottom: var(--mb-2-5);
        list-style: none;
      }
    ul li a {
        position: relative;
        font-size: var(--h3-font-size);
        text-decoration: none;
        text-align: center;
        color: var(--title-color);
      }
      ul li a:hover {
        color: var(--first-color);
    }
`