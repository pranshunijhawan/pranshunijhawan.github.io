import styled from "styled-components";
import { container, grid } from "../../types/common-css";

export const TestimonialsContainer = styled.div`
    ${container}
    ${grid}
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: var(--mb-2-5);

    @media screen and (max-width: 349px) {
        grid-template-columns: max-content;
          justify-content: center;
    }

    @media screen and (min-width: 350px) and (max-width: 567px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`