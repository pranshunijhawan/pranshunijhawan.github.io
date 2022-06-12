import styled from "styled-components";
import { CenterScreen } from "../../types/common-css";

export const CertificateContainer = styled.div`
    position: relative;
    background-color: var(--container-color);
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: 0.3s;
    display: flex;
    align-items: center;
    padding-top: 0.9rem;
`

export const LogoImageContainer = styled.div`
    ${CenterScreen}
    margin-left: var(--mb-1);
    margin-top: var(--mb-1);
    margin-bottom: var(--mb-1);
`

export const CertificateDetailsContainer = styled.div`
    row-gap: 1.5rem;
    height: max-content;
    margin-top: var(--mb-0-5);
    margin-bottom: var(--mb-2);
    margin-left: var(--mb-2);
`

export const CertificateTitle = styled.h3`
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1-5);
    margin-right: var(--mb-1);
`