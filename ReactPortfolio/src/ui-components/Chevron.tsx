import styled from "styled-components";
import { moveChevron } from "../types/animation-css";

const Chevron = styled.div`
    position: absolute;
    width: 2.1rem;
    height: 0.48rem;
    opacity: 0;
    transform: scale(0.3);
    animation: ${moveChevron} 3s ease-out infinite;

    &:first-child {
        animation: ${moveChevron} 3s ease-out 1s infinite;
      }
      
    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: var(--first-color);
      }
      
    &:before {
        left: 0;
        transform: skewY(30deg);
      }
      
    &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
    }
`

export default Chevron;