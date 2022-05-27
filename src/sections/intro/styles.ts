import styled from "styled-components";
import { slideInEnter, slideInExit } from "../../types/common-css";

export const IntroContainer = styled.div<{
    enter: boolean
}>`
    ${({ enter }) => enter ? slideInEnter : slideInExit }
`