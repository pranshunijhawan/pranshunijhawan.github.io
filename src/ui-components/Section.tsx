import styled from 'styled-components'
import { section } from "../types/common-css";

export const Section = styled.section`
    ${section}
    margin-top: var(--mb-2);
    transition: opacity 1s, visibility 1s;
`