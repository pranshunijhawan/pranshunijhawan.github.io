import styled, { css } from 'styled-components'
import { container } from '../../types/common-css'


const commonMediaQuery = css`
    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`

export const AboutContainer = styled.div`
    ${container}
    ${commonMediaQuery}
`

export const AboutDescription = styled.p`
    text-align: left;
    margin-bottom: var(--mb-2-5);
    ${commonMediaQuery}
`

export const AboutButtons = styled.div`
    display: flex;
    justify-content: center;
`