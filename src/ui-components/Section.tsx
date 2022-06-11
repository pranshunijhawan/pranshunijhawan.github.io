import styled from 'styled-components'
import { section } from "../types/common-css";

export const Section = styled.section`
    ${section}
    transition: opacity 1s, visibility 1s;
    scroll-margin-top: var(--mb-2);
`