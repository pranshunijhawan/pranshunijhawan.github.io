import styled from "styled-components";
import { slideInEnter, slideOutBackExit } from "../../types/common-css";

export const IntroContainer = styled.div<{
    enter: boolean
}>`
    ${({ enter }) => enter ? slideInEnter : slideOutBackExit }
    opacity: ${({ enter }) => enter ? 0 : 1 };
`