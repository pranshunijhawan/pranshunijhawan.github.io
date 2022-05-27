import { css } from 'styled-components';

export const bdGrid = css`
    display: grid;
    grid-template-columns: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`

export const section = css`
    padding: 2rem 0 2rem;
`

export const sectionTitle = css`
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-2);
    text-align: center;
    margin-top: var(--mb-2);
`
export const container = css`
    max-width: 980px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
`

export const grid = css`
    display: grid;
    gap: 1.5rem;
`

export const buttonIcon = css`
    font-size: 1rem;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
`

export const CenterScreen = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`