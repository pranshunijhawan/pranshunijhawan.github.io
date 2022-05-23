import styled from "styled-components";
import { CenterScreen } from "../../types/common-css";
import { AiOutlineArrowRight } from 'react-icons/ai';

export const CertificateContainer = styled.div`
    position: relative;
    background-color: var(--container-color);
    padding: 3.5rem 0.5rem 1.25rem 1.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: 0.3s;
`

export const LogoImageContainer = styled.div`
    ${CenterScreen}
`

export const CertificateDetailsContainer = styled.div`
    row-gap: 1.5rem;
    height: max-content;
    margin-bottom: var(--mb-2-5);
    margin-top: var(--mb-2-5);
    margin-right: var(--mb-1);


    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CertificateTitle = styled.h3`
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
    width: 58%;
`

export const RightIcon = styled(AiOutlineArrowRight)`
    font-size: 1.25rem;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
`