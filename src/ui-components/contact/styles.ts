import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

export const ContactData = styled.span`
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    word-break: break-all;
    margin-left: var(--mb-0-5);

    a {
        color: var(--text-color-light);
    }
`