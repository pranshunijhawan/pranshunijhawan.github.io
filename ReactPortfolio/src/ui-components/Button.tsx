import styled from 'styled-components'

export interface ButtonProps {
    link: string;
    name: string;
    icon?: JSX.Element;
    target?: string;
}

const ButtonComponent = styled.a`
    display: inline-flex;
    align-items: center;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);

    &:hover {
        background-color: var(--first-color-alt);
    }
`

const Button = ({ link, name, icon, target }: ButtonProps) => {

    const buttonTarget = target && target === 'none' ? '' : '_blank';

    return (
        <ButtonComponent target={buttonTarget} href={link}>{name} {icon}</ButtonComponent>
    )
}

export default Button