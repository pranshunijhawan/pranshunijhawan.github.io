import styled from "styled-components";
import { container } from "../../types/common-css";

export const MostProudOfContainer = styled.div`
    ${container}
    row-gap: 0;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`